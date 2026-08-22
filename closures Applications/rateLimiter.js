function createRateLimiter(maxCalls, windowMs){
	let calls = []; //to store the timestamps
	return function (){
		const now = Date.now();
		
		calls = calls.filter((time) => now - time < windowMs);
		// remove all the timestamps which are not in 1 second windowMs
		if(calls.length >= maxCalls){
			return false;
		}
		
		calls.push(now);
		return true;
	
	
	};

}





// Absolutely. Let's understand it like a real API rate limiter.

// Suppose:

// const limiter = createRateLimiter(3, 1000);

// This means:

// A user can make at most 3 requests within any 1000 ms (1 second) window.

// Imagine an API:

// GET /api/users

// and a user starts clicking a button repeatedly.

// 1. Initially

// When we create the limiter:

// let calls = [];

// We start with:

// calls = []

// This array stores the timestamp of every allowed call.

// 2. User makes first request

// At:

// 10:00:00.000

// limiter() executes.

// Step 1
// const now = Date.now();

// Suppose:

// now = 10000
// Step 2
// calls = calls.filter(time => now - time < windowMs);

// Currently:

// calls = []

// Nothing to remove.

// Step 3
// if (calls.length >= maxCalls)

// We have:

// calls.length = 0
// maxCalls = 3

// So:

// 0 >= 3 → false
// Step 4
// calls.push(now);

// Now:

// calls = [10000]

// Return:

// true
// 3. User makes second request

// Suppose it happens at:

// 10:00:00.200

// So:

// now = 10200

// We have:

// calls = [10000]

// Filter:

// now - time < windowMs

// becomes:

// 10200 - 10000 < 1000
// 200 < 1000

// Yes.

// So the call is still inside the 1-second window.

// calls = [10000]

// Length:

// 1 < 3

// Allow it.

// Then:

// calls.push(now);

// Now:

// calls = [10000, 10200]

// Return:

// true
// 4. Third request

// Suppose:

// 10:00:00.400

// Now:

// calls = [10000, 10200]
// now = 10400

// Both calls are still within the last 1 second.

// So:

// calls = [10000, 10200]

// Length:

// 2 < 3

// Allow.

// Then:

// calls = [10000, 10200, 10400]

// Return:

// true
// 5. Fourth request immediately

// Suppose:

// 10:00:00.500

// Now:

// calls = [10000, 10200, 10400]

// All three are still inside the 1-second window.

// Filter doesn't remove anything.

// So:

// calls.length = 3
// maxCalls = 3

// Therefore:

// if (calls.length >= maxCalls)

// becomes:

// 3 >= 3

// true.

// So:

// return false;

// 🚫 Request rejected.

// Now comes the important part
// Suppose the user waits.

// The first call happened at:

// 10000 ms

// And now it's:

// 11001 ms

// That's 1001 ms later.

// We call:

// limiter();

// Now:

// now = 11001

// Current calls:

// calls = [10000, 10200, 10400]

// The filter runs:

// calls.filter(time => now - time < windowMs)

// Let's check each one.

// First call
// 11001 - 10000 = 1001

// Is:

// 1001 < 1000

// ❌ No.

// So remove it.

// Second call
// 11001 - 10200 = 801
// 801 < 1000

// ✅ Keep it.

// Third call
// 11001 - 10400 = 601
// 601 < 1000

// ✅ Keep it.

// So now:

// calls = [10200, 10400]

// We have only 2 calls in the current 1-second window.

// Therefore:

// 2 >= 3

// ❌ false.

// So the new request is allowed.

// Then:

// calls.push(now);

// Result:

// calls = [10200, 10400, 11001]

// Return:

// true
// So visually

// For:

// createRateLimiter(3, 1000)

// Think of a moving 1-second window:

// Time →
// ────────────────────────────────────────────>

// 10000     10200     10400     11001
//   │         │         │         │
//   │         │         │         │
//  CALL 1    CALL 2    CALL 3    CALL 4
//   ✓         ✓         ✓         ✓

// When we're at 11001, the window is approximately:

// 10001 ─────────────────────── 11001

// The first call at 10000 has fallen outside the window.

// So it gets deleted.

// The most important line

// This:

// calls = calls.filter(time => now - time < windowMs);

// means:

// "Before checking whether I can accept this request, remove all requests that are older than 1 second."

// Then:

// if (calls.length >= maxCalls)

// means:

// "How many requests are currently inside my 1-second window? If there are already 3, reject this request."

// And:

// calls.push(now);

// means:

// "This request was accepted, so remember when it happened."