/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const expressingDontNeedToWithBuyongPattern = require('./expressingDontNeedToWithBuyongPattern');
const { assertAllExamplesMatch, assertNoneMatch } = require('../lib/testUtils');

test('matches all examples', async () => {
  await assertAllExamplesMatch(expressingDontNeedToWithBuyongPattern);
});

// TODO: Add more tests

test("doesn't match negative examples", async () => {
  await assertNoneMatch(
    expressingDontNeedToWithBuyongPattern,
    [
      // TODO: add negative examples here
    ]
  );
});
