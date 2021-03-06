/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGY0UDC',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'houlai',
  structures: ['Past Event 1 + 后来 + Past Event 2'],
  description:
    '"⋯⋯, 后来⋯⋯" (..., hòulái...) is used to sequence past events in the same way that "Afterward..." is in English. Something very important to note is that 后来 can only be used with two events that have already occurred.',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(后来)/)]),
  examples: [
    {
      zh: '开始他不同意，但后来他同意了。',
      en: "At first he didn't agree, but then he did later.",
      src: allSetSrc,
    },
    {
      zh: '上个星期我的朋友生病了，不过后来他病好了。',
      en: 'Last week my friend got sick, but then he got better.',
      src: allSetSrc,
    },
    {
      zh: '她昨天吃了海鲜，后来她食物中毒了。',
      en: 'She ate seafood yesterday, but then she got food poisoning.',
      src: allSetSrc,
    },
    {
      zh: '我邻居家的孩子丢了，后来又找到了。',
      en: "My neighbor's child was missing, and then they found him .",
      src: allSetSrc,
    },
    {
      zh: '北京以前叫北平，后来改成了北京。',
      en: 'Beijing used to be called Beiping and got changed into Beijing later.',
      src: allSetSrc,
    },
  ],
};
