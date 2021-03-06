/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGN8C8R',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'expressingOnlyWithZhi',
  structures: ['只 + Verb', '只 + 会 / 能 + Verb'],
  description:
    'There are a number of different ways to express "only" in Chinese, but 只 (zhǐ) is the most basic one you need to learn first. It\'s an adverb, so it normally comes before verbs.',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(只)/)]),
  examples: [
    {
      zh: '我只有一个哥哥。',
      en: 'I only have one older brother.',
      src: allSetSrc,
    },
    {
      zh: '我们只有十块钱。',
      en: 'We only have ten RMB.',
      src: allSetSrc,
    },
    {
      zh: '我们公司只有两个员工。',
      en: 'Our company only has two employees.',
      src: allSetSrc,
    },
    {
      zh: '你只爱吃肉吗？',
      en: 'Do you only like eating meat?',
      src: allSetSrc,
    },
    {
      zh: '他们只会说英文。',
      en: 'They can only speak English.',
      src: allSetSrc,
    },
    {
      zh: '我只能说两句中文。',
      en: 'I can only say two sentences in Chinese.',
      src: allSetSrc,
    },
    {
      zh: '你们只要咖啡吗？',
      en: 'Do you only want coffee?',
      src: allSetSrc,
    },
    {
      zh: '我老婆只要一个孩子。',
      en: 'My wife only wants one child.',
      src: allSetSrc,
    },
    {
      zh: '宝宝只会走，不会跑。',
      en: "The baby can only walk. He can't run.",
      src: allSetSrc,
    },
    {
      zh: '我只想跟你在一起。',
      en: 'I only want to be with you.',
      src: allSetSrc,
    },
  ],
};
