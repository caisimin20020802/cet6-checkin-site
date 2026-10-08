const PLAN_START = "2026-10-08";
const PLAN_END = "2026-12-11";
const EXAM_DATE = "2026-12-12";
const STORAGE_KEY = "cet6-checkin-2026-v1";

const weeks = [
  {
    id: "w1", range: "10 月 8 日—10 月 18 日", stage: "恢复英语状态 + 毕设剪辑期", duration: "60—75 分钟/学习日",
    tasks: [
      { title: "2021 年 6 月第一套：听力方法与单段练习", detail: "六级高频单词 15 分钟；听六级听力入门或方法课程 20—25 分钟；完成第一套听力中的一个部分；对答案并看原文；单独记录认识但没有听出来的词。", tags:["听力","方法课","2021 年 6 月第一套"] },
      { title: "2021 年 6 月第一套：仔细阅读两篇", detail: "六级高频单词 15 分钟；不限时完成两篇仔细阅读；每一道错题都回到原文寻找依据；记录题目与原文之间的同义替换表达。", tags:["阅读","2021 年 6 月第一套"] },
      { title: "2021 年 6 月第二套：听力精听与长篇匹配", detail: "六级高频单词 15 分钟；精听一个听力部分；对照原文跟读 5—10 分钟；完成一篇长篇匹配并练习用人名、数字、地名和特殊名词定位。", tags:["听力","长篇匹配","2021 年 6 月第二套"] },
      { title: "2021 年 12 月第一套：仔细阅读方法验证", detail: "六级高频单词 15 分钟；听仔细阅读方法课程 20—30 分钟；马上完成两篇仔细阅读；逐题分析错误是词汇、定位、逻辑还是干扰项造成。", tags:["阅读","方法课","2021 年 12 月第一套"] },
      { title: "2021 年 12 月第一套：整套听力基线", detail: "六级高频单词 15 分钟；不暂停、不倒退完成整套听力；第一次统计正确率；不纠结换算分数，只把错因分到记录表中。", tags:["整套听力","基线测试","2021 年 12 月第一套"] }
    ]
  },
  {
    id:"w2", range:"10 月 19 日—10 月 25 日", stage:"2022 年真题专项训练", duration:"75—90 分钟/学习日",
    tasks:[
      {title:"2022 年 6 月第一套：完整听力",detail:"六级高频单词 15 分钟；按考试方式完整做听力；对答案；错误部分重新听；阅读听力原文；按照五类错因完成记录。",tags:["听力","2022 年 6 月第一套"]},
      {title:"2022 年 6 月第一套：完整阅读专项",detail:"六级高频单词 15 分钟；完成长篇匹配和两篇仔细阅读；选词填空最多用 10 分钟；复盘每一道阅读错题并记录同义替换。",tags:["阅读","2022 年 6 月第一套"]},
      {title:"2022 年 6 月第一套：听力错题精听",detail:"六级高频单词 15 分钟；重新听错误最多的听力部分；对照原文跟读；只针对暴露的问题补一节约 20 分钟的听力课程。",tags:["听力复盘","针对性课程"]},
      {title:"2022 年 12 月第一套：阅读训练",detail:"六级高频单词 15 分钟；完成两篇仔细阅读和一篇长篇匹配；找到每题原文依据；整理同义替换并复习当天生词。",tags:["阅读","2022 年 12 月第一套"]},
      {title:"2022 年 12 月第一套：整套听力",detail:"六级高频单词 15 分钟；严格按照考试方式做整套听力，不暂停、不倒退、不看字幕；完成后精听错题并写明错因。",tags:["整套听力","2022 年 12 月第一套"]}
    ]
  },
  {
    id:"w3", range:"10 月 26 日—11 月 1 日", stage:"进入主力真题：2023 年 6 月", duration:"约 90 分钟/学习日",
    tasks:[
      {title:"2023 年 6 月第一套：完整听力与复盘",detail:"六级高频单词 15 分钟；完整做听力；错误部分按照先不看原文重听、再看原文定位、最后关掉原文重听的顺序复盘，并记录错因。",tags:["听力","2023 年 6 月第一套"]},
      {title:"2023 年 6 月第一套：完整阅读",detail:"六级高频单词 15 分钟；完成选词填空、长篇匹配和两篇仔细阅读；重点统计仔细阅读与长篇匹配正确率；选词填空只记录，不死磕。",tags:["阅读","2023 年 6 月第一套"]},
      {title:"2023 年 6 月第一套：作文与翻译",detail:"六级高频单词 15 分钟；保持 20—30 分钟六级听力；完整写一篇作文和一段翻译；可以听作文基础方法课程，开始建立自己的结构与表达库。",tags:["作文","翻译","方法课"]},
      {title:"2023 年 6 月第二套：完整听力",detail:"六级高频单词 15 分钟；完整完成第二套听力；对答案后只精听错题与犹豫题；把听到却反应慢的词加入听力词单。",tags:["听力","2023 年 6 月第二套"]},
      {title:"2023 年 6 月第二套：完整阅读",detail:"六级高频单词 15 分钟；完成第二套阅读；仔细阅读逐题找原文依据；长篇匹配总结关键词定位；最后复习本周真题生词。",tags:["阅读","2023 年 6 月第二套"]}
    ]
  },
  {
    id:"w4", range:"11 月 2 日—11 月 8 日", stage:"2023 年 12 月真题：主力训练与旧考试复盘", duration:"约 90 分钟/学习日",
    tasks:[
      {title:"2023 年 12 月第一套：听力与精听",detail:"六级高频单词 15 分钟；按考试方式完成第一套听力；精听所有错题；如果遇到自己当年考过的套卷，不把结果当测试，只分析当年为什么没有得分。",tags:["听力","2023 年 12 月第一套"]},
      {title:"2023 年 12 月第一套：阅读",detail:"六级高频单词 15 分钟；完成第一套阅读；重点保证两篇仔细阅读和长篇匹配；记录原文定位句、同义替换和时间分配问题。",tags:["阅读","2023 年 12 月第一套"]},
      {title:"写作与翻译恢复日",detail:"六级高频单词 15 分钟；保持 20—30 分钟听力；计时写一篇作文与一段翻译；把不会表达的中文改写成自己能写对的简单英语。",tags:["作文","翻译","每日听力"]},
      {title:"2023 年 12 月第二套：听力与仔细阅读",detail:"六级高频单词 15 分钟；完成第二套听力和两篇仔细阅读；分别统计正确率；对照原文复盘听力，对照定位句复盘阅读。",tags:["听力","仔细阅读","2023 年 12 月第二套"]},
      {title:"本周两套真题总复盘",detail:"六级高频单词 15 分钟；保持 20 分钟听力；不开新题；重新做本周所有错题，整理高频生词、听力词、同义替换和仍然不稳定的题型。",tags:["只复盘","不开新题"]}
    ]
  },
  {
    id:"w5", range:"11 月 9 日—11 月 15 日", stage:"2024 年 6 月真题：第一次具有测试意义的一周", duration:"90—110 分钟/学习日",
    tasks:[
      {title:"2024 年 6 月第一套：完整听力",detail:"六级高频单词 15 分钟；完整完成听力并统计约 25 道题的正确数；错题按照五类原因记录；错误集中部分再精听。",tags:["听力","2024 年 6 月第一套"]},
      {title:"2024 年 6 月第一套：完整阅读",detail:"六级高频单词 15 分钟；完成完整阅读；仔细阅读目标至少 7/10，向 8/10 靠近；长篇匹配目标 7—8/10；选词填空最后处理。",tags:["阅读","阶段检查"]},
      {title:"弱项补课 + 作文翻译",detail:"六级高频单词 15 分钟；保持 20—30 分钟听力；只针对明确弱项听一节课程，不再系统听长课；完成一篇作文或一段翻译并修改。",tags:["针对性课程","写作翻译"]},
      {title:"2024 年 6 月第二套：听力与阅读连续训练",detail:"六级高频单词 15 分钟；听力与阅读连续完成，第一次模拟两个大模块连续工作的状态；中间不玩手机、不查单词；记录注意力和时间问题。",tags:["半套模拟","2024 年 6 月第二套"]},
      {title:"阶段检查与完整复盘",detail:"保持单词和 20 分钟听力；不开新题；复盘两套真题。听力若只有 8—10 题正确，之后每天增加 10—15 分钟；检查仔细阅读与长篇匹配是否达到目标。",tags:["只复盘","阶段检查"]}
    ]
  },
  {
    id:"w6", range:"11 月 16 日—11 月 22 日", stage:"第一次完整模拟周：2024 年 12 月", duration:"90 分钟；模拟日约 150 分钟",
    tasks:[
      {title:"听力专项巩固",detail:"六级高频单词 15 分钟；选择近期错误最多的听力部分进行精听；练习预读选项、抓转折与因果、没听懂一句后立刻跟下一句；完成错因记录。",tags:["听力专项"]},
      {title:"仔细阅读专项巩固",detail:"六级高频单词 15 分钟；保持 20—30 分钟听力；完成两篇仔细阅读；每题找出原文定位句和干扰项错误点；目标达到 7—8/10。",tags:["仔细阅读"]},
      {title:"作文模板与翻译表达",detail:"六级高频单词 15 分钟；保持 20—30 分钟听力；整理自己的作文开头、原因、举例和结尾表达；完成一段翻译，优先保证意思准确与英语句子正确。",tags:["作文","翻译"]},
      {title:"2024 年 12 月第一套：第一次完整模拟",detail:"严格按照作文、听力、阅读、翻译的真实顺序一次完成。全程计时，不查词、不暂停、不玩手机、不看答案。记录各模块用时与模拟总分。",tags:["完整模拟","2024 年 12 月第一套"]},
      {title:"第一次完整模拟深度复盘",detail:"不开新题。分析听力错因、阅读可挽回的分数、词汇或时间问题、作文结构和翻译表达；重新做错题并把结论写进错题本。",tags:["只复盘","不开新题"]}
    ]
  },
  {
    id:"w7", range:"11 月 23 日—11 月 29 日", stage:"2025 年 6 月真题：第二次完整训练", duration:"90—120 分钟；模拟日约 150 分钟",
    tasks:[
      {title:"2025 年 6 月第一套：完整听力",detail:"六级高频单词 15 分钟；按考试方式完整完成听力；统计正确率；精听错题和犹豫题；记录单词不会、认识但没听出来、定位错误等具体原因。",tags:["听力","2025 年 6 月第一套"]},
      {title:"2025 年 6 月第一套：完整阅读",detail:"六级高频单词 15 分钟；保持 20 分钟听力；完成完整阅读；优先保证仔细阅读和长篇匹配；复盘每题原文依据与同义替换。",tags:["阅读","2025 年 6 月第一套"]},
      {title:"听力复盘 + 作文翻译",detail:"六级高频单词 15 分钟；重新精听第一套的错误部分；计时完成一篇作文和一段翻译；修改语法错误并补充自己的常用表达。",tags:["听力复盘","作文","翻译"]},
      {title:"2025 年 6 月第二套：第二次完整模拟",detail:"严格按照真实考试顺序完整计时。全程不暂停、不查词、不看答案。完成后只记录分数、用时和最明显的问题，暂不立刻刷下一套。",tags:["完整模拟","2025 年 6 月第二套"]},
      {title:"第二次完整模拟深度复盘",detail:"不开新题；完整复盘第二套。若模拟约 400 分，不慌；420—440 分说明接近或进入过线区；450 分以上继续巩固且不能停止听力。",tags:["只复盘","分数检查"]}
    ]
  },
  {
    id:"w8", range:"11 月 30 日—12 月 6 日", stage:"冲刺：个人考试复盘 + 2026 年 6 月最近真题", duration:"90—120 分钟；模拟日约 150 分钟",
    tasks:[
      {title:"2025 年 12 月真题：个人考试总复盘",detail:"六级高频单词 15 分钟；这套不作为严格模考。结合当时听力 81、阅读 113、写作翻译 88 的结果，找出失分最重的环节和状态问题。",tags:["个人错题样本","2025 年 12 月"]},
      {title:"2025 年 12 月真题：听力重做与精听",detail:"六级高频单词 15 分钟；按照重新做、精听、看原文、关掉原文再听的顺序处理整套听力；把现在仍没听出的词加入听力词单。",tags:["听力重做","2025 年 12 月"]},
      {title:"2025 年 12 月真题：阅读重做",detail:"六级高频单词 15 分钟；保持 20—30 分钟听力；重新完成仔细阅读和长篇匹配；对比现在与当时的正确率、定位速度和同义替换识别能力。",tags:["阅读重做","2025 年 12 月"]},
      {title:"2026 年 6 月第一套：冲刺完整模拟",detail:"这是距离本次考试最近的重要真题。严格按照真实考试顺序完整计时；不暂停、不查词、不看答案；记录各模块表现和模拟总分。",tags:["完整模拟","2026 年 6 月第一套"]},
      {title:"2026 年 6 月第一套：只做深度复盘",detail:"不开新卷；复盘听力、仔细阅读、长篇匹配、作文和翻译；重新做所有错题；整理最后一周必须再看的听力词、阅读替换与写译表达。",tags:["只复盘","不开新题"]}
    ]
  },
  {
    id:"w9", range:"12 月 7 日—12 月 11 日", stage:"最后 5 天：降低强度，稳定状态", duration:"30—150 分钟，逐日下降",
    tasks:[
      {title:"12 月 7 日｜2026 年 6 月第二套最终完整模拟",detail:"完成最后一次真正意义上的完整考试。严格计时，不暂停、不查词、不看答案；目标让模拟状态稳定在 440—460 分左右。",tags:["最终完整模拟","2026 年 6 月第二套"]},
      {title:"12 月 8 日｜彻底复盘最终模拟",detail:"背单词 15 分钟；重点复盘昨天的听力与仔细阅读，再检查长篇匹配、作文和翻译；重新做错题，不再开完整新卷。",tags:["深度复盘","不开新卷"]},
      {title:"12 月 9 日｜短训练与模板回顾",detail:"背单词 15 分钟；听力 20—30 分钟；完成 1—2 篇仔细阅读；回看自己的作文模板。不再进行完整模拟。",tags:["轻量训练","作文模板"]},
      {title:"12 月 10 日｜高频内容收口",detail:"复习六级高频词、真题生词、自己的作文模板和翻译常用表达；听 20 分钟六级听力；总时长控制在 60—90 分钟。",tags:["收口复习","60—90 分钟"]},
      {title:"12 月 11 日｜考前轻量回顾与早睡",detail:"只学习 30—60 分钟：看作文结构、高频词和以前错过的听力词；不做新题、不突然听新老师、不突击背大量预测作文；准备考试用品并早点睡。",tags:["考前一天","30—60 分钟"]}
    ]
  }
];

const courseWeeks = [
  [
    {id:"c1-1",minutes:10,title:"听力入门 1：六级听力题型、分值结构与考点剖析",action:"听完立即写下三种听力题型、各自题量，以及自己最容易丢分的题型。",type:"烤鸭 TV · 必看方法课"},
    {id:"c1-2",minutes:48,title:"听力入门 2：贯穿六级听力的核心概念",action:"可拆成两次观看。听完马上用 2021 年 6 月第一套的一个听力部分验证，不把“听懂老师”当作完成。",type:"烤鸭 TV · 赠课必看"},
    {id:"c1-3",minutes:25,title:"阅读入门 1：六级阅读题型、分值结构与考点剖析",action:"听完给仔细阅读、长篇匹配、选词填空排优先级，并用 2021 年 6 月第一套两篇仔细阅读验证。",type:"烤鸭 TV · 阅读方法"}
  ],
  [
    {id:"c2-1",minutes:9,title:"听力入门 3：快速排除干扰项的方法",action:"听完重做 2022 年 6 月第一套的犹豫题，把被干扰项骗的题记录到错因表。",type:"烤鸭 TV · 听力方法"},
    {id:"c2-2",minutes:6,title:"听力方法：三大题型解题步骤详述",action:"把三大题型步骤压缩成一张自己的考前流程卡，随后完成 2022 年 12 月第一套听力。",type:"烤鸭 TV · 听力方法"},
    {id:"c2-3",minutes:29,title:"长篇阅读题型：保姆级方法讲解",action:"听完立即完成一篇长篇匹配，练习人名、数字、地名、特殊名词和同义替换定位。",type:"烤鸭 TV · 阅读方法"},
    {id:"c2-4",minutes:16,title:"仔细阅读题型：保姆级方法讲解",action:"听完立即做 2022 年 12 月第一套两篇仔细阅读，每题必须找到原文定位句。",type:"烤鸭 TV · 阅读方法"}
  ],
  [
    {id:"c3-1",minutes:45,title:"阅读入门 2：贯穿各题型的考点",action:"这节是必看课，可拆成两次。听完整理同义替换、逻辑关系和定位词，用 2023 年 6 月阅读检验。",type:"烤鸭 TV · 赠课必看"},
    {id:"c3-2",minutes:10,title:"词汇理解题型：保姆级方法讲解",action:"听完只用 10 分钟做选词填空，练习先判断词性；到时立即停止，不挤占仔细阅读时间。",type:"烤鸭 TV · 阅读方法"}
  ],
  [
    {id:"c4-1",minutes:45,title:"听力实战 1：2023 年 12 月第一套长对话 1—4 题",action:"必须先独立做题，再看课程。观看时只记录自己的错误位置、信号词和干扰项。",type:"烤鸭 TV · 真题讲解"},
    {id:"c4-2",minutes:37,title:"听力实战 2：2023 年 12 月第一套听力篇章 9—11 题",action:"先做后听；课程结束后关掉讲解再听一次，确认答案句能够独立捕捉。",type:"烤鸭 TV · 真题讲解"},
    {id:"c4-3",minutes:39,title:"长篇阅读实战：2023 年 12 月第一套 36—45 题",action:"先独立限时完成，再用课程检查定位顺序与同义替换，不抄老师答案。",type:"烤鸭 TV · 真题讲解"},
    {id:"c4-4",minutes:27,title:"仔细阅读实战：2023 年 12 月第一套 51—55 题",action:"先做后听；听完重新口述每道题为什么选这个答案、其他选项错在哪里。",type:"烤鸭 TV · 真题讲解"}
  ],
  [
    {id:"c5-1",minutes:35,title:"2024 年 6 月听力：只看错题对应讲解 1 节",action:"先完成整套听力，再从长对话、篇章或讲座中选错误最多的一节观看；最多 35 分钟。",type:"烤鸭 TV · 选择性观看"},
    {id:"c5-2",minutes:35,title:"2024 年 6 月阅读：只看薄弱题型讲解 1 节",action:"先完成阅读，再从长篇匹配或仔细阅读中选一节；选词填空除非连续失分，否则不追加课程。",type:"烤鸭 TV · 选择性观看"},
    {id:"c5-3",minutes:25,title:"后期阅读补弱课程槽位",action:"如果另外购买阅读课，本周只听一个仍不稳定的模块；听完必须立刻完成对应真题，不重复系统课。",type:"待购买 · 可暂时跳过"}
  ],
  [
    {id:"c6-1",minutes:35,title:"2024 年 12 月听力：模拟后错题讲解",action:"完整模拟前不看。模拟复盘时只观看错误最多的一个听力小节，并把错因写入记录。",type:"烤鸭 TV · 模考后解锁"},
    {id:"c6-2",minutes:35,title:"2024 年 12 月阅读：模拟后错题讲解",action:"完整模拟前不看。只选择长篇匹配或仔细阅读中的薄弱小节，听完重新独立完成。",type:"烤鸭 TV · 模考后解锁"},
    {id:"c6-3",minutes:25,title:"后期写作翻译课程：结构与简单表达",action:"购买具体课程后替换课名。听完必须产出一篇作文框架或一段翻译，不能只做笔记。",type:"待购买 · 每周 1 节"}
  ],
  [
    {id:"c7-1",minutes:35,title:"2025 年 6 月听力：第一套或第二套错题精讲",action:"先做题。只看错误最多的一节，观看后关掉课程重听并口述答案依据。",type:"烤鸭 TV · 选择性观看"},
    {id:"c7-2",minutes:35,title:"2025 年 6 月阅读：薄弱题型精讲",action:"先做题。仔细阅读优先；只看真正不会的题，不把整套解析从头播放到尾。",type:"烤鸭 TV · 选择性观看"},
    {id:"c7-3",minutes:25,title:"后期写作翻译课程：作文论证或翻译拆句",action:"购买具体课程后替换课名。课程结束后计时完成一篇作文或一段翻译，并修改语法错误。",type:"待购买 · 每周 1 节"}
  ],
  [
    {id:"c8-1",minutes:35,title:"2025 年 12 月听力：个人失分点精讲",action:"结合当时听力 81 分，只看现在重做仍然错误的小节；看完再听一次并更新错因表。",type:"烤鸭 TV · 个人错题样本"},
    {id:"c8-2",minutes:35,title:"2025 年 12 月阅读：个人失分点精讲",action:"结合当时阅读 113 分，只看重做后仍不清楚的长篇匹配或仔细阅读小节。",type:"烤鸭 TV · 个人错题样本"},
    {id:"c8-3",minutes:25,title:"后期写作翻译课程：模板定稿",action:"把课程方法收敛成自己真的能写出的作文模板和翻译表达，不再增加大量新句型。",type:"待购买 · 模板定稿"}
  ],
  [
    {id:"c9-1",minutes:20,title:"课程笔记最终回顾：听力信号词与阅读定位",action:"只看自己过去记下的课程笔记与错题结论，不再观看新的长课。",type:"考前回顾"},
    {id:"c9-2",minutes:20,title:"写作翻译课程笔记最终回顾",action:"只复习自己的作文结构、常用论证句和翻译简单表达；不背陌生预测范文。",type:"考前回顾"}
  ]
];

const papers = [
  ["2021 年 6 月第一套","恢复手感、听力与阅读专项","practice"],["2021 年 6 月第二套","听力精听与长篇匹配专项","practice"],["2021 年 12 月第一套","恢复训练与整套听力基线","practice"],
  ["2022 年 6 月第一套","听力与阅读专项训练","practice"],["2022 年 12 月第一套","听力与阅读专项训练","practice"],
  ["2023 年 6 月第一套","主力训练，开始写作与翻译","practice"],["2023 年 6 月第二套","主力听力与阅读训练","practice"],["2023 年 12 月第一套","主力训练与旧考试复盘","practice"],["2023 年 12 月第二套","主力训练","practice"],
  ["2024 年 6 月第一套","主力训练与阶段正确率检查","practice"],["2024 年 6 月第二套","听力与阅读连续完成","half"],["2024 年 12 月第一套","第一次完整模拟","mock"],
  ["2025 年 6 月第一套","冲刺专项训练","practice"],["2025 年 6 月第二套","第二次完整模拟","mock"],["2025 年 12 月真题","个人真实错误样本复盘，不作为严格模考","practice"],
  ["2026 年 6 月第一套","冲刺完整模拟","mock"],["2026 年 6 月第二套","考前最终完整模拟","mock"]
];

const mistakeCategories = ["单词不会","认识但没听出来","定位错误","被干扰项骗","上一题影响下一题"];
const state = loadState();
let selectedWeek = currentWeekIndex();

function defaultState(){ return {checks:{}, weekDone:{}, courseDone:{}, rests:{}, mistakes:[]}; }
function loadState(){ try { return {...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")}; } catch { return defaultState(); } }
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateProgress(); }
function localISO(date=new Date()){ const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,"0"),d=String(date.getDate()).padStart(2,"0"); return `${y}-${m}-${d}`; }
function parseLocal(s){ const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d); }
function currentWeekIndex(){ const now=parseLocal(localISO()); const ranges=[["2026-10-08","2026-10-18"],["2026-10-19","2026-10-25"],["2026-10-26","2026-11-01"],["2026-11-02","2026-11-08"],["2026-11-09","2026-11-15"],["2026-11-16","2026-11-22"],["2026-11-23","2026-11-29"],["2026-11-30","2026-12-06"],["2026-12-07","2026-12-11"]]; const i=ranges.findIndex(([a,b])=>now>=parseLocal(a)&&now<=parseLocal(b)); return i<0?(now<parseLocal(PLAN_START)?0:8):i; }
function todayTaskIndex(weekIndex){ const done=weeks[weekIndex].tasks.map((_,i)=>!!state.weekDone[`${weeks[weekIndex].id}-${i}`]); const open=done.findIndex(x=>!x); return open<0?4:open; }
function formatDate(date){ return new Intl.DateTimeFormat("zh-CN",{month:"long",day:"numeric",weekday:"long"}).format(date); }
function escapeHTML(s=""){ return s.replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function toast(message){ const el=document.querySelector("#toast"); el.textContent=message; el.classList.add("show"); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove("show"),2200); }

function renderToday(){
  const now=new Date(); document.querySelector("#today-date").textContent=`${formatDate(now)} · 备考第 ${Math.max(1,Math.min(65,Math.floor((parseLocal(localISO())-parseLocal(PLAN_START))/86400000)+1))} 天`;
  const days=Math.max(0,Math.ceil((parseLocal(EXAM_DATE)-parseLocal(localISO()))/86400000)); document.querySelector("#countdown-days").textContent=days;
  const wi=currentWeekIndex(), ti=todayTaskIndex(wi), main=weeks[wi].tasks[ti], dateKey=localISO();
  const course=courseWeeks[wi].find(c=>!state.courseDone[c.id]);
  const daily=[
    ["words","持续背六级单词 15—20 分钟","先复习昨天的词，再学 30—50 个高频新词，并记录真题生词。11 月以后逐渐以真题生词、高频词和听力词为主。"],
    ["listening","持续听六级英语 20—30 分钟","前期精听，后期整套；重点标记认识但没有听出来的词。即使今天很忙，也要守住连续输入。"],
    ["main",main.title,main.detail]
  ];
  document.querySelector("#today-duration").textContent=course?`主线 + 课程 ${course.minutes} 分钟`:`预计 ${weeks[wi].duration.split("/")[0]}`;
  document.querySelector("#today-tasks").innerHTML=daily.map(([id,title,detail])=>{ const key=`${dateKey}-${id}`; return `<label class="check-row ${state.checks[key]?"done":""}"><input type="checkbox" data-check="${key}" ${state.checks[key]?"checked":""}><span><b>${title}</b><small>${detail}</small></span></label>`; }).join("")+(course?`<label class="check-row ${state.courseDone[course.id]?"done":""}"><input type="checkbox" data-today-course="${course.id}" ${state.courseDone[course.id]?"checked":""}><span><b>课程支线 · ${course.title}（${course.minutes} 分钟）</b><small>${course.action}</small></span></label>`:"");
  document.querySelectorAll("[data-check]").forEach(el=>el.addEventListener("change",()=>{state.checks[el.dataset.check]=el.checked; saveState(); renderToday();}));
  document.querySelectorAll("[data-today-course]").forEach(el=>el.addEventListener("change",()=>{state.courseDone[el.dataset.todayCourse]=el.checked;saveState();renderToday();renderCourse();toast(el.checked?"支线完成，获得 30 XP":"已取消课程支线");}));
}

function renderWeekSelector(){ const select=document.querySelector("#week-select"); select.innerHTML=weeks.map((w,i)=>`<option value="${i}">第 ${i+1} 章 · ${w.range}</option>`).join(""); select.value=selectedWeek; select.addEventListener("change",()=>{selectedWeek=Number(select.value);renderWeek();renderCourse();}); }
function renderWeek(){
  const w=weeks[selectedWeek]; document.querySelector("#week-stage").textContent=`${w.stage} · ${w.duration}`;
  const firstOpen=w.tasks.findIndex((_,i)=>!state.weekDone[`${w.id}-${i}`]);
  document.querySelector("#weekly-tasks").innerHTML=w.tasks.map((t,i)=>{ const key=`${w.id}-${i}`,done=!!state.weekDone[key],locked=!done&&i>0&&!state.weekDone[`${w.id}-${i-1}`],current=!done&&!locked&&i===firstOpen,boss=t.title.includes("完整模拟"),reward=boss?100:50; return `<article class="weekly-card ${done?"complete":""} ${locked?"locked":""} ${current?"current":""}"><span class="task-number">${done?"✓":locked?"🔒":String(i+1).padStart(2,"0")}</span><div><h3>${boss?"BOSS 战 · ":""}${t.title}</h3><p>${t.detail}</p><div class="meta">${t.tags.map(x=>`<span class="tag">${x}</span>`).join("")}<span class="tag reward-tag">+${reward} XP</span></div></div><button class="complete-button" data-week-task="${key}" ${locked?"disabled":""}>${done?"已通关 ✓":locked?"尚未解锁":"挑战关卡"}</button></article>`; }).join("");
  document.querySelectorAll("[data-week-task]").forEach(btn=>btn.addEventListener("click",()=>{ const key=btn.dataset.weekTask; state.weekDone[key]=!state.weekDone[key]; saveState(); renderWeek(); renderToday(); toast(state.weekDone[key]?"关卡通关！经验值已增加 ✦":"已撤回这一关的记录"); }));
  document.querySelector("#rest-cards").innerHTML=[0,1].map(i=>{ const key=`${w.id}-${i}`,used=state.rests[key]; return `<button class="rest-card ${used?"used":""}" data-rest="${key}"><b>${used?"体力恢复卡已使用":"体力恢复卡 "+(i+1)}</b><small>${used?`使用日期：${used}`:"点击选择本章任意一天"}</small></button>`; }).join("");
  document.querySelectorAll("[data-rest]").forEach(btn=>btn.addEventListener("click",()=>{ const key=btn.dataset.rest;if(state.rests[key]){delete state.rests[key];saveState();renderWeek();toast("休息卡已恢复");return;}const date=prompt("输入休息日期（例如 2026-10-21）",localISO());if(date){state.rests[key]=date;saveState();renderWeek();toast("今天安心休息，最低线也算坚持");}}));
  updateWeekProgress();
}
function updateWeekProgress(){ const w=weeks[selectedWeek],done=w.tasks.filter((_,i)=>state.weekDone[`${w.id}-${i}`]).length,p=Math.round(done/5*100);document.querySelector("#week-percent").textContent=`${p}%`;document.querySelector("#week-progress").style.width=`${p}%`; }

function renderCourse(){
  const list=courseWeeks[selectedWeek],doneCount=list.filter(c=>state.courseDone[c.id]).length;
  document.querySelector("#course-progress-count").textContent=`${doneCount} / ${list.length}`;
  document.querySelector("#course-quests").innerHTML=list.map((c,i)=>{const done=!!state.courseDone[c.id];return `<label class="course-quest ${done?"done":""}"><input type="checkbox" data-course="${c.id}" ${done?"checked":""}><span><h3>${c.title}</h3><p>${c.action}</p><span class="meta"><span class="tag">${c.minutes} 分钟</span><span class="tag">${c.type}</span><span class="tag reward-tag">+30 XP</span></span></span></label>`;}).join("");
  document.querySelectorAll("[data-course]").forEach(el=>el.addEventListener("change",()=>{state.courseDone[el.dataset.course]=el.checked;saveState();renderCourse();renderToday();toast(el.checked?"课程支线完成，获得 30 XP":"已取消课程支线");}));
}

function renderPapers(){ document.querySelector("#paper-list").innerHTML=papers.map(([name,use,type])=>`<article class="paper-card ${type}"><i class="dot ${type}"></i><div><h3>${name}</h3><p>${use}</p></div><span>${type==="mock"?"完整模拟":type==="half"?"半套模拟":"拆分专项"}</span></article>`).join(""); }
function renderMistakes(){
  const sel=document.querySelector("#mistake-category"); sel.innerHTML=mistakeCategories.map(x=>`<option>${x}</option>`).join(""); document.querySelector("#mistake-date").value=localISO()<PLAN_START?PLAN_START:localISO()>PLAN_END?PLAN_END:localISO();
  renderMistakeData();
  document.querySelector("#mistake-form").addEventListener("submit",e=>{e.preventDefault();state.mistakes.unshift({id:Date.now(),date:document.querySelector("#mistake-date").value,source:document.querySelector("#mistake-source").value.trim(),category:sel.value,note:document.querySelector("#mistake-note").value.trim()});saveState();e.target.reset();document.querySelector("#mistake-date").value=localISO();renderMistakeData();toast("错因已保存，复盘才是提分的开始");});
}
function renderMistakeData(){
  const counts=Object.fromEntries(mistakeCategories.map(x=>[x,state.mistakes.filter(m=>m.category===x).length])),max=Math.max(1,...Object.values(counts));document.querySelector("#mistake-bars").innerHTML=mistakeCategories.map(x=>`<div class="bar-row"><span>${x}</span><div class="bar"><i style="width:${counts[x]/max*100}%"></i></div><b>${counts[x]}</b></div>`).join("");
  document.querySelector("#mistake-history").innerHTML=state.mistakes.length?state.mistakes.slice(0,7).map(m=>`<div class="history-item"><div><b>${escapeHTML(m.category)} · ${escapeHTML(m.source)}</b><small>${m.date}${m.note?` · ${escapeHTML(m.note)}`:""}</small></div><button class="delete-record" data-delete="${m.id}" aria-label="删除记录">×</button></div>`).join(""):`<p class="empty">还没有记录。下一次听力复盘，从第一条开始。</p>`;
  document.querySelectorAll("[data-delete]").forEach(btn=>btn.addEventListener("click",()=>{state.mistakes=state.mistakes.filter(m=>m.id!==Number(btn.dataset.delete));saveState();renderMistakeData();}));
}
function updateProgress(){
  const all=weeks.flatMap(w=>w.tasks.map((t,i)=>({key:`${w.id}-${i}`,reward:t.title.includes("完整模拟")?100:50}))),done=all.filter(x=>state.weekDone[x.key]).length,p=Math.round(done/all.length*100);
  const mainXP=all.filter(x=>state.weekDone[x.key]).reduce((sum,x)=>sum+x.reward,0),courseXP=courseWeeks.flat().filter(c=>state.courseDone[c.id]).length*30,dailyXP=Object.values(state.checks).filter(Boolean).length*10,mistakeXP=state.mistakes.length*15,xp=mainXP+courseXP+dailyXP+mistakeXP,stars=done+courseWeeks.flat().filter(c=>state.courseDone[c.id]).length;
  const levels=[[1400,"Lv.5 过线勇者"],[900,"Lv.4 复盘专家"],[500,"Lv.3 真题冒险家"],[200,"Lv.2 定位学徒"],[0,"Lv.1 初入考场"]],level=levels.find(([need])=>xp>=need)[1];
  const ring=document.querySelector("#overall-ring");if(ring)ring.style.setProperty("--p",p);const pct=document.querySelector("#overall-percent");if(pct)pct.textContent=`${p}%`;
  document.querySelector("#player-level").textContent=level;document.querySelector("#player-xp").textContent=`${xp} XP`;document.querySelector("#player-stars").textContent=`${stars} ★`;
  const title=document.querySelector("#encouragement"),copy=document.querySelector("#overall-copy");if(!title)return;if(p===100){title.textContent="全部关卡通关，去考场吧";copy.textContent="你已经把整张上岸地图走完了。";}else if(p>=70){title.textContent="终章已开启，稳住节奏";copy.textContent="保持听力，不临时追逐陌生资料。";}else if(p>=35){title.textContent="冒险节奏已经形成";copy.textContent="继续把错题变成下一次的经验值。";}else{title.textContent="第一关，开始吧";copy.textContent="每次打卡都会累积经验值和星星。";} updateWeekProgress();
}
function setupBackup(){
  document.querySelector("#export-button").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`六级打卡备份-${localISO()}.json`;a.click();URL.revokeObjectURL(url);});
  document.querySelector("#import-input").addEventListener("change",async e=>{try{const data=JSON.parse(await e.target.files[0].text());Object.assign(state,defaultState(),data);saveState();renderToday();renderWeek();renderCourse();renderMistakeData();toast("打卡备份已导入");}catch{toast("这个备份文件无法读取");}});
  document.querySelector("#reset-button").addEventListener("click",()=>{if(confirm("确定清空当前浏览器里的全部打卡、休息卡和错因记录吗？此操作无法撤销。")){localStorage.removeItem(STORAGE_KEY);location.reload();}});
}
renderToday();renderWeekSelector();renderWeek();renderCourse();renderPapers();renderMistakes();setupBackup();updateProgress();

let renderedDate=localISO();
function refreshForNewDay(){
  const nextDate=localISO();
  if(nextDate===renderedDate)return;
  renderedDate=nextDate;
  selectedWeek=currentWeekIndex();
  document.querySelector("#week-select").value=selectedWeek;
  renderToday();renderWeek();renderCourse();
}
setInterval(refreshForNewDay,60000);
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")refreshForNewDay();});
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
