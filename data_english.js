window.QUIZ_DATA = window.QUIZ_DATA || { social: [], science: [], english: [] };
window.QUIZ_DATA.english.push(
  {
    id: "english-u01",
    subject: "english",
    unitGroup: "Unit 1: My Family Tree",
    title: "Unit 1｜My Family Tree (I can write about my family)",
    shortTitle: "Unit 1：My Family Tree (p.6–13)",
    pages: [],
    sections: [
      {
        id: "u1-reading",
        title: "Part 1｜課文朗讀與閱讀理解 (Reading & Circle the correct answers, p.6)",
        instruction: "先點擊朗讀英國王室家庭樹短文，再圈選出正確答案。",
        passage: "Queen Elizabeth is the Queen of England. She is married to Prince Phillip and they have a big family. They have three sons, one daughter, and five grandchildren. They are all princes and princesses. Queen Elizabeth's children are all grown up. Her son, Prince Charles is the next King. He married Princess Diana and they had two sons, Prince William and Prince Harry. Unfortunately, Princess Diana died in 1997. Later, Charles married Camilla Parker Bowles. William got married to Kate in 2011. He is a helicopter pilot in the airforce and may become King one day. His brother, Harry, is a soldier in the army.",
        passageTts: "Queen Elizabeth is the Queen of England. She is married to Prince Phillip and they have a big family. They have three sons, one daughter, and five grandchildren. They are all princes and princesses. Queen Elizabeth's children are all grown up. Her son, Prince Charles is the next King. He married Princess Diana and they had two sons, Prince William and Prince Harry. Unfortunately, Princess Diana died in 1997. Later, Charles married Camilla Parker Bowles. William got married to Kate in 2011. He is a helicopter pilot in the airforce and may become King one day. His brother, Harry, is a soldier in the army.",
        questions: [
          {
            no: "A",
            type: "mc",
            stem: "The Queen has (three / four / five) children.",
            ttsText: "Question A. The Queen has three, four, or five children?",
            options: ["three", "four", "five"],
            answer: "four",
            explanation: "短文提到：They have three sons, one daughter（3個兒子＋1個女兒＝4個孩子）。"
          },
          {
            no: "B",
            type: "mc",
            stem: "The Queen has (no / four / five) grandchildren.",
            ttsText: "Question B. The Queen has no, four, or five grandchildren?",
            options: ["no", "four", "five"],
            answer: "five",
            explanation: "短文提到：They have three sons, one daughter, and five grandchildren（5個孫子女）。"
          },
          {
            no: "C",
            type: "mc",
            stem: "Prince Charles married (Kate / Camilla).",
            ttsText: "Question C. Prince Charles married Kate or Camilla?",
            options: ["Kate", "Camilla"],
            answer: "Camilla",
            explanation: "短文提到：Later, Charles married Camilla Parker Bowles（查爾斯王子後來娶了 Camilla）。"
          },
          {
            no: "D",
            type: "mc",
            stem: "Charles and Diana had (two sons / daughters).",
            ttsText: "Question D. Charles and Diana had two sons or daughters?",
            options: ["two sons", "daughters"],
            answer: "two sons",
            explanation: "短文提到：He married Princess Diana and they had two sons, Prince William and Prince Harry。"
          }
        ]
      },
      {
        id: "u1-vocab",
        title: "Part 2｜核心單字、家庭樹填空與例句完成 (Vocabulary & Examples, p.7)",
        instruction: "Vocabulary：uncle (叔叔/舅舅)、son (兒子)、parents (父母親)、cousins (堂表兄弟姊妹)、daughter (女兒)、grandparents (祖父母/外祖父母)、aunt (姑姑/阿姨)。觀察 Anna 的家庭樹並填入正確單字。",
        passage: "【Read the Examples 例句朗讀】\n1. Anna's parents are high school teachers. (安娜的父母是高中老師。)\n2. Anna's aunt and uncle have a son and a daughter. (安娜的姑姑和姑丈有一個兒子和一個女兒。)\n3. Her aunt Lisa is a very kind person. (她的姑姑麗莎是個非常親切的人。)",
        passageTts: "Vocabulary: uncle, son, parents, cousins, daughter, grandparents, aunt. Examples: 1. Anna's parents are high school teachers. 2. Anna's aunt and uncle have a son and a daughter. 3. Her aunt Lisa is a very kind person.",
        questions: [
          {
            no: "Family Tree 1",
            type: "fill",
            stem: "Look at Anna's family tree (No. 1: Anna 的爺爺與奶奶). Put the right word in the blank.",
            ttsText: "Number 1 on Anna's family tree: grandparents.",
            options: ["grandparents", "parents", "uncle", "aunt", "son", "daughter", "cousins"],
            answer: "grandparents",
            explanation: "家庭樹最頂層 (1) 是 Anna 的祖父母 (grandparents)。"
          },
          {
            no: "Family Tree 2",
            type: "fill",
            stem: "Look at Anna's family tree (No. 2: Anna 的爸爸與媽媽). Put the right word in the blank.",
            ttsText: "Number 2 on Anna's family tree: parents.",
            options: ["grandparents", "parents", "uncle", "aunt", "son", "daughter", "cousins"],
            answer: "parents",
            explanation: "(2) 是 Anna 的父母親 (parents)。"
          },
          {
            no: "Family Tree 3",
            type: "fill",
            stem: "Look at Anna's family tree (No. 3: Anna 父母的兒子／Anna 的兄弟). Put the right word in the blank.",
            ttsText: "Number 3 on Anna's family tree: son.",
            options: ["grandparents", "parents", "uncle", "aunt", "son", "daughter", "cousins"],
            answer: "son",
            explanation: "(3) 為 Anna 父母的兒子 (son)。"
          },
          {
            no: "Family Tree 4",
            type: "fill",
            stem: "Look at Anna's family tree (No. 4: Anna 本人，父母的女兒). Put the right word in the blank.",
            ttsText: "Number 4 on Anna's family tree: daughter.",
            options: ["grandparents", "parents", "uncle", "aunt", "son", "daughter", "cousins"],
            answer: "daughter",
            explanation: "(4) Anna 是父母的女兒 (daughter)。"
          },
          {
            no: "Family Tree 5",
            type: "fill",
            stem: "Look at Anna's family tree (No. 5: 右側戴眼鏡的叔叔/姑丈). Put the right word in the blank.",
            ttsText: "Number 5 on Anna's family tree: uncle.",
            options: ["grandparents", "parents", "uncle", "aunt", "son", "daughter", "cousins"],
            answer: "uncle",
            explanation: "(5) 是叔叔／姑丈／姨丈 (uncle)。"
          },
          {
            no: "Family Tree 6",
            type: "fill",
            stem: "Look at Anna's family tree (No. 6: 右側的姑姑/阿姨). Put the right word in the blank.",
            ttsText: "Number 6 on Anna's family tree: aunt.",
            options: ["grandparents", "parents", "uncle", "aunt", "son", "daughter", "cousins"],
            answer: "aunt",
            explanation: "(6) 是姑姑／阿姨／嬸嬸 (aunt)。"
          },
          {
            no: "Family Tree 7",
            type: "fill",
            stem: "Look at Anna's family tree (No. 7: 叔叔與姑姑的一對兒女). Put the right word in the blank.",
            ttsText: "Number 7 on Anna's family tree: cousins.",
            options: ["grandparents", "parents", "uncle", "aunt", "son", "daughter", "cousins"],
            answer: "cousins",
            explanation: "(7) 是 Anna 的堂／表兄弟姊妹 (cousins)。"
          },
          {
            no: "Sentence 1",
            type: "fill",
            stem: "Anna has two __________, a boy and a girl.",
            ttsText: "Complete sentence 1: Anna has two cousins, a boy and a girl.",
            options: ["cousins", "parents", "grandparents", "uncle"],
            answer: "cousins",
            explanation: "Anna 有兩個堂/表親 (cousins)，一個男孩和一個女孩。"
          },
          {
            no: "Sentence 2",
            type: "fill",
            stem: "Anna's parents have two children, one __________ and one __________.",
            ttsText: "Complete sentence 2: Anna's parents have two children, one son and one daughter.",
            options: ["son / daughter", "uncle / aunt", "boy / cousins", "parents / grandparents"],
            answer: "son / daughter",
            explanation: "Anna 的父母有兩個孩子，一個兒子 (son) 和一個女兒 (daughter)。"
          },
          {
            no: "Sentence 3",
            type: "fill",
            stem: "Anna's __________ are old, but they are very healthy.",
            ttsText: "Complete sentence 3: Anna's grandparents are old, but they are very healthy.",
            options: ["grandparents", "cousins", "son", "daughter"],
            answer: "grandparents",
            explanation: "Anna 的祖父母 (grandparents) 年紀大了，但非常健康。"
          }
        ]
      },
      {
        id: "u1-getready",
        title: "Part 3｜寫作準備：Jane 的家庭樹短文填空 (Get Ready to Write, p.10)",
        instruction: "閱讀 Jane Johnson 的 My Family Tree 短文，並根據家庭樹填入正確的家人名字（Diane, Peter, Sally）。",
        passage: "My name is Jane Johnson and this is my family tree. Can you see me? I am 10 years old and I have blonde hair. I am next to my little brother, Tom. I like him very much although he is naughty! My parents are busy people. Dad is a scientist and Mom is a high school teacher at the witch school. My dad's sister is Aunt Diane. She is a very kind witch. She uses magic to cook delicious food. My uncle's name is Peter. He is a werewolf, but don't worry, because he is not dangerous. Actually, he is very good at telling funny stories. I have one cousin and her name is Sally. She is really nice to everyone. She always brings flowers to my grandparents. They like her a lot. Grandma and Grandpa are both 120 years old, but they are still very healthy. I like to play basketball with them in the park. We are a happy family and we love each other very much.",
        passageTts: "My name is Jane Johnson and this is my family tree. Can you see me? I am 10 years old and I have blonde hair. I am next to my little brother, Tom. I like him very much although he is naughty! My parents are busy people. Dad is a scientist and Mom is a high school teacher at the witch school. My dad's sister is Aunt Diane. She is a very kind witch. She uses magic to cook delicious food. My uncle's name is Peter. He is a werewolf, but don't worry, because he is not dangerous. Actually, he is very good at telling funny stories. I have one cousin and her name is Sally. She is really nice to everyone. She always brings flowers to my grandparents. They like her a lot. Grandma and Grandpa are both 120 years old, but they are still very healthy. I like to play basketball with them in the park. We are a happy family and we love each other very much.",
        questions: [
          {
            no: "Blank 1",
            type: "fill",
            stem: "My dad's sister is Aunt __________. She is a very kind witch. She uses magic to cook delicious food.",
            ttsText: "My dad's sister is Aunt Diane. She is a very kind witch.",
            options: ["Diane", "Peter", "Sally", "Tom"],
            answer: "Diane",
            explanation: "從家庭樹可知，爸爸 (Dad) 的姊妹是 Aunt Diane。"
          },
          {
            no: "Blank 2",
            type: "fill",
            stem: "My uncle's name is __________. He is a werewolf, but don't worry, because he is not dangerous.",
            ttsText: "My uncle's name is Peter. He is a werewolf, but don't worry, because he is not dangerous.",
            options: ["Diane", "Peter", "Sally", "Tom"],
            answer: "Peter",
            explanation: "從家庭樹可知，Aunt Diane 的先生（Jane 的姑丈）名字是 Peter。"
          },
          {
            no: "Blank 3",
            type: "fill",
            stem: "I have one cousin and her name is __________. She is really nice to everyone.",
            ttsText: "I have one cousin and her name is Sally. She is really nice to everyone.",
            options: ["Diane", "Peter", "Sally", "Tom"],
            answer: "Sally",
            explanation: "從家庭樹可知，Diane 和 Peter 的女兒（Jane 的表妹/堂妹）名字是 Sally。"
          }
        ]
      },
      {
        id: "u1-review",
        title: "Part 4｜句子改錯與短文填空 (Write Now! Review, p.12)",
        instruction: "找出句子中用錯的單字或形容詞並更正，再完成下方家庭短文填空。",
        passage: "【範例 Examples】\n• My cousin, Jenny, is mean (✗) → funny (✓) because she likes to tell jokes.\n• My mom's brother is my son (✗) → uncle (✓).",
        passageTts: "Check the sentences for mistakes. Example 1: My cousin, Jenny, is funny because she likes to tell jokes. Example 2: My mom's brother is my uncle.",
        questions: [
          {
            no: "1",
            type: "mc",
            stem: "改錯題 1：My sister is thin because she eats too much and does not exercise.（哪個字錯誤？應改為什麼？）",
            ttsText: "Sentence 1: My sister is fat, or heavy, because she eats too much and does not exercise.",
            options: ["thin 改為 fat / heavy / chubby", "sister 改為 brother", "eats 改為 drinks", "exercise 改為 sleep"],
            answer: "thin 改為 fat / heavy / chubby",
            explanation: "因為吃太多又不運動 (eats too much and does not exercise)，所以應該把 thin（瘦的）改為 fat / heavy / chubby（胖的）。"
          },
          {
            no: "2",
            type: "mc",
            stem: "改錯題 2：My aunt has two children, one son and one sister.（哪個字錯誤？應改為什麼？）",
            ttsText: "Sentence 2: My aunt has two children, one son and one daughter.",
            options: ["sister 改為 daughter", "son 改為 brother", "aunt 改為 uncle", "two 改為 three"],
            answer: "sister 改為 daughter",
            explanation: "姑姑/阿姨的兩個孩子應該是一個兒子 (one son) 和一個女兒 (one daughter)，sister 應改為 daughter。"
          },
          {
            no: "3",
            type: "mc",
            stem: "改錯題 3：My cousin, Peter, always gets 100 on his tests because he is lazy.（哪個字錯誤？應改為什麼？）",
            ttsText: "Sentence 3: My cousin, Peter, always gets 100 on his tests because he is smart, or hard-working.",
            options: ["lazy 改為 smart / hard-working / clever", "cousin 改為 uncle", "100 改為 0", "always 改為 never"],
            answer: "lazy 改為 smart / hard-working / clever",
            explanation: "考試總是考 100 分，因此不是 lazy（懶惰的），應改為 smart / clever（聰明的）或 hard-working（用功的）。"
          },
          {
            no: "4",
            type: "mc",
            stem: "改錯題 4：My uncle, Tom, is happy. He always shouts at us.（哪個字錯誤？應改為什麼？）",
            ttsText: "Sentence 4: My uncle, Tom, is angry, or mean. He always shouts at us.",
            options: ["happy 改為 angry / mean / strict", "uncle 改為 aunt", "shouts 改為 smiles", "always 改為 never"],
            answer: "happy 改為 angry / mean / strict",
            explanation: "他總是對我們大吼大叫 (always shouts at us)，所以把 happy 改為 angry（生氣的）或 mean（兇的）。"
          },
          {
            no: "Writing 1",
            type: "fill",
            stem: "I have a happy family. My (1)__________ are really nice people. They are friendly, so they have many friends.",
            ttsText: "I have a happy family. My parents are really nice people. They are friendly, so they have many friends.",
            options: ["parents", "dad", "brother", "sister"],
            answer: "parents",
            explanation: "後面接 are 與代名詞 They，因此填複數名詞 parents（父母親）或 grandparents。"
          },
          {
            no: "Writing 2",
            type: "fill",
            stem: "My (2)__________ is a teacher. He works 10 hours every day. He is so (3)__________! He teaches me many things, so I always think he is (4)__________.",
            ttsText: "My dad is a teacher. He works 10 hours every day. He is so busy, or hard-working! He teaches me many things, so I always think he is smart, or great.",
            options: ["(2) dad/father, (3) busy/hard-working, (4) smart/great", "(2) mom, (3) lazy, (4) mean", "(2) sister, (3) angry, (4) cute", "(2) aunt, (3) free, (4) shy"],
            answer: "(2) dad/father, (3) busy/hard-working, (4) smart/great",
            explanation: "後句代名詞為 He，故 (2) 填 dad/father 或 uncle；一天工作10小時代表很 (3) busy / hard-working；教我很多事情代表很 (4) smart / wise / great。"
          },
          {
            no: "Writing 3",
            type: "fill",
            stem: "I do not have any sisters, but I have a (5)__________. He is very (6)__________ because he does not like me to borrow his toys. My aunt says he is very (7)__________ because he has big eyes and curly hair. I think he is (8)__________ because he never cleans his room!",
            ttsText: "I do not have any sisters, but I have a brother. He is very stingy, or selfish, because he does not like me to borrow his toys. My aunt says he is very cute, or handsome, because he has big eyes and curly hair. I think he is messy, or lazy, because he never cleans his room!",
            options: [
              "(5) brother, (6) stingy/mean/selfish, (7) cute/handsome, (8) messy/lazy/dirty",
              "(5) sister, (6) kind, (7) tall, (8) clean",
              "(5) aunt, (6) friendly, (7) old, (8) hard-working",
              "(5) grandma, (6) happy, (7) short, (8) smart"
            ],
            answer: "(5) brother, (6) stingy/mean/selfish, (7) cute/handsome, (8) messy/lazy/dirty",
            explanation: "沒有姊妹但有一個 (5) brother（兄弟）；不喜歡借玩具是 (6) stingy/selfish/mean；大眼睛捲髮是 (7) cute/handsome；從不打掃房間是 (8) lazy/messy/dirty。"
          }
        ]
      }
    ]
  },
  {
    id: "english-u07",
    subject: "english",
    unitGroup: "Unit 7: Hobbies",
    title: "Unit 7｜Hobbies (I can write about a hobby)",
    shortTitle: "Unit 7：Hobbies (p.54–61)",
    pages: [],
    sections: [
      {
        id: "u7-reading",
        title: "Part 1｜課文朗讀與表格整理：剪貼簿 (Scrapbooking, p.54)",
        instruction: "先聆聽 Scrapbooking 短文朗讀，再整理剪貼簿所需的物品 (Item) 與原因 (Why)。",
        passage: "Scrapbooking is a very popular hobby. It can be a great way for kids to learn arts and craft skills.\nWhat you need:\nFirst you need a scrapbook. Inside the scrapbook you can paste or stick anything, so you will need glue and sticky tape. You will also need some fun colored pens to write with. Scissors are useful for cutting pictures and colored paper into interesting shapes.\nThere is no wrong way or right way to scrapbook. This is why it is so great. Use your imagination and have fun!",
        passageTts: "Scrapbooking is a very popular hobby. It can be a great way for kids to learn arts and craft skills. What you need: First you need a scrapbook. Inside the scrapbook you can paste or stick anything, so you will need glue and sticky tape. You will also need some fun colored pens to write with. Scissors are useful for cutting pictures and colored paper into interesting shapes. There is no wrong way or right way to scrapbook. This is why it is so great. Use your imagination and have fun!",
        questions: [
          {
            no: "Chart 1",
            type: "mc",
            stem: "Item 1: a scrapbook — Why do you need a scrapbook?",
            ttsText: "Item 1: a scrapbook. You can paste or stick anything inside it.",
            options: [
              "to paste or stick anything inside it",
              "to cut pictures into shapes",
              "to play computer games",
              "to grow flowers in the garden"
            ],
            answer: "to paste or stick anything inside it",
            explanation: "課文：First you need a scrapbook. Inside the scrapbook you can paste or stick anything."
          },
          {
            no: "Chart 2",
            type: "mc",
            stem: "Item 2: glue and sticky tape — Why do you need glue and sticky tape?",
            ttsText: "Item 2: glue and sticky tape. To paste or stick things inside the scrapbook.",
            options: [
              "to paste or stick things inside the scrapbook",
              "to write with",
              "to cut colored paper",
              "to take photos"
            ],
            answer: "to paste or stick things inside the scrapbook",
            explanation: "課文：Inside the scrapbook you can paste or stick anything, so you will need glue and sticky tape."
          },
          {
            no: "Chart 3",
            type: "mc",
            stem: "Item 3: fun colored pens — Why do you need fun colored pens?",
            ttsText: "Item 3: fun colored pens. To write with.",
            options: [
              "to write with",
              "to cut pictures",
              "to stick things",
              "to draw straight lines"
            ],
            answer: "to write with",
            explanation: "課文：You will also need some fun colored pens to write with."
          },
          {
            no: "Chart 4",
            type: "mc",
            stem: "Item 4: scissors (and pictures / colored paper) — Why do you need scissors?",
            ttsText: "Item 4: scissors. For cutting pictures and colored paper into interesting shapes.",
            options: [
              "for cutting pictures and colored paper into interesting shapes",
              "for sticking things together",
              "for playing games",
              "for watering plants"
            ],
            answer: "for cutting pictures and colored paper into interesting shapes",
            explanation: "課文：Scissors are useful for cutting pictures and colored paper into interesting shapes."
          }
        ]
      },
      {
        id: "u7-vocab",
        title: "Part 2｜嗜好單字看圖配對與例句填空 (Vocabulary & Examples, p.55)",
        instruction: "Vocabulary：sticker collecting (收集貼紙)、taking photos (拍照)、computer games (電腦遊戲)、skateboarding (溜滑板)、arts and crafts (美勞工藝)、gardening (園藝)。",
        passage: "【Read the Examples 例句朗讀】\n1. Skateboarding is exciting, but it can be dangerous. (溜滑板很刺激，但可能很危險。)\n2. Taking photos is an interesting hobby. (拍照是個有趣的嗜好。)\n3. Doing arts and crafts is fun because I can make things. (做美勞很有趣，因為我可以製作東西。)",
        passageTts: "Vocabulary: sticker collecting, taking photos, computer games, skateboarding, arts and crafts, gardening. Examples: 1. Skateboarding is exciting, but it can be dangerous. 2. Taking photos is an interesting hobby. 3. Doing arts and crafts is fun because I can make things.",
        questions: [
          {
            no: "Pic 1",
            type: "fill",
            stem: "Picture 1 (男孩正在溜滑板): Put the right word or phrase in the blank.",
            ttsText: "Picture 1: skateboarding.",
            options: ["skateboarding", "taking photos", "arts and crafts", "gardening", "sticker collecting", "computer games"],
            answer: "skateboarding",
            explanation: "圖 1 男孩腳踩滑板，答案為 skateboarding（溜滑板）。"
          },
          {
            no: "Pic 2",
            type: "fill",
            stem: "Picture 2 (女孩拿著相機拍照): Put the right word or phrase in the blank.",
            ttsText: "Picture 2: taking photos.",
            options: ["skateboarding", "taking photos", "arts and crafts", "gardening", "sticker collecting", "computer games"],
            answer: "taking photos",
            explanation: "圖 2 女孩拿相機拍照，答案為 taking photos（拍照）。"
          },
          {
            no: "Pic 3",
            type: "fill",
            stem: "Picture 3 (桌上放著剪刀、膠水在做美勞): Put the right word or phrase in the blank.",
            ttsText: "Picture 3: arts and crafts.",
            options: ["skateboarding", "taking photos", "arts and crafts", "gardening", "sticker collecting", "computer games"],
            answer: "arts and crafts",
            explanation: "圖 3 男孩用剪刀與膠水做勞作，答案為 arts and crafts（美勞工藝）。"
          },
          {
            no: "Pic 4",
            type: "fill",
            stem: "Picture 4 (照顧盆栽與花草): Put the right word or phrase in the blank.",
            ttsText: "Picture 4: gardening.",
            options: ["skateboarding", "taking photos", "arts and crafts", "gardening", "sticker collecting", "computer games"],
            answer: "gardening",
            explanation: "圖 4 正在照顧盆栽植物，答案為 gardening（園藝）。"
          },
          {
            no: "Pic 5",
            type: "fill",
            stem: "Picture 5 (展示一整本貼紙簿): Put the right word or phrase in the blank.",
            ttsText: "Picture 5: sticker collecting.",
            options: ["skateboarding", "taking photos", "arts and crafts", "gardening", "sticker collecting", "computer games"],
            answer: "sticker collecting",
            explanation: "圖 5 收集貼紙，答案為 sticker collecting（收集貼紙）。"
          },
          {
            no: "Pic 6",
            type: "fill",
            stem: "Picture 6 (用電腦玩遊戲): Put the right word or phrase in the blank.",
            ttsText: "Picture 6: computer games.",
            options: ["skateboarding", "taking photos", "arts and crafts", "gardening", "sticker collecting", "computer games"],
            answer: "computer games",
            explanation: "圖 6 在電腦前玩遊戲，答案為 computer games（電腦遊戲）。"
          },
          {
            no: "Sentence 1",
            type: "fill",
            stem: "1. Playing __________ is great fun, but you need a good computer.",
            ttsText: "Sentence 1: Playing computer games is great fun, but you need a good computer.",
            options: ["computer games", "Sticker collecting", "gardening", "skateboarding"],
            answer: "computer games",
            explanation: "後面提到 you need a good computer，因此填 computer games。"
          },
          {
            no: "Sentence 2",
            type: "fill",
            stem: "2. __________ is fun. Many of my classmates like to exchange them.",
            ttsText: "Sentence 2: Sticker collecting is fun. Many of my classmates like to exchange them.",
            options: ["Sticker collecting", "Computer games", "Gardening", "Taking photos"],
            answer: "Sticker collecting",
            explanation: "同學們喜歡互相交換 (exchange them)，且位於句首字首大寫，填 Sticker collecting。"
          },
          {
            no: "Sentence 3",
            type: "fill",
            stem: "3. I enjoy __________ very much and I have beautiful flowers growing in my garden all year round.",
            ttsText: "Sentence 3: I enjoy gardening very much and I have beautiful flowers growing in my garden all year round.",
            options: ["gardening", "skateboarding", "computer games", "arts and crafts"],
            answer: "gardening",
            explanation: "花園裡一年四季都有美麗的花朵生長，因此填 gardening（園藝）。"
          }
        ]
      },
      {
        id: "u7-lang",
        title: "Part 3｜文法與句型練習：V-ing 當名詞與形容詞 (Language Practice, p.56–57)",
        instruction: "V-ing 可以當代表動作的「名詞 (noun)」，也可以當形容事物的「形容詞 (adjective)」。",
        passage: "【Tips for Writing】\n• V-ing can be used as a noun, which represents an action.\n  ➡ Walking is good for your health. (散步對你的健康有益。)\n• V-ing can also be used as an adjective to describe things.\n  ➡ The baseball game is very exciting. (這場棒球賽非常刺激。)",
        passageTts: "Tips for Writing. V-ing can be used as a noun, which represents an action. Walking is good for your health. V-ing can also be used as an adjective to describe things. The baseball game is very exciting.",
        questions: [
          {
            no: "p56-1",
            type: "mc",
            stem: "1. [take photos] An interesting but expensive hobby is __________. (請選出正確拼字，並判斷是 noun 還是 adjective)",
            ttsText: "Number 1: An interesting but expensive hobby is taking photos. Used as a noun.",
            options: ["taking photos (noun 名詞)", "taking photos (adjective 形容詞)", "takeing photos (noun 名詞)", "took photos (adjective 形容詞)"],
            answer: "taking photos (noun 名詞)",
            explanation: "去 e 加 ing：taking photos，在此代表這項嗜好本身，作名詞 (noun) 使用。"
          },
          {
            no: "p56-2",
            type: "mc",
            stem: "2. [relax] Gardening is a __________ hobby for many old people. (請選出正確拼字，並判斷是 noun 還是 adjective)",
            ttsText: "Number 2: Gardening is a relaxing hobby for many old people. Used as an adjective.",
            options: ["relaxing (adjective 形容詞)", "relaxing (noun 名詞)", "relaxed (noun 名詞)", "relaxes (adjective 形容詞)"],
            answer: "relaxing (adjective 形容詞)",
            explanation: "修飾後面的名詞 hobby（令人放鬆的嗜好），故為 relaxing，作形容詞 (adjective) 使用。"
          },
          {
            no: "p56-match-1",
            type: "mc",
            stem: "造句配對 1：I think making arts and crafts is __________.",
            ttsText: "I think making arts and crafts is creative because I can draw beautiful pictures.",
            options: [
              "creative because I can draw beautiful pictures",
              "exciting because I can fight monsters",
              "interesting because I can feed and take care of it",
              "fun because I can learn about the world"
            ],
            answer: "creative because I can draw beautiful pictures",
            explanation: "做美勞很有創意 (creative)，因為可以畫出美麗的圖畫 (because I can draw beautiful pictures)。"
          },
          {
            no: "p56-match-2",
            type: "mc",
            stem: "造句配對 2：I think reading is __________.",
            ttsText: "I think reading is fun because I can learn about the world.",
            options: [
              "fun because I can learn about the world",
              "exciting because I can fight monsters",
              "creative because I can draw beautiful pictures",
              "interesting because I can feed and take care of it"
            ],
            answer: "fun because I can learn about the world",
            explanation: "閱讀很有趣 (fun)，因為可以認識這個世界 (because I can learn about the world)。"
          },
          {
            no: "p56-match-3",
            type: "mc",
            stem: "造句配對 3：I think playing computer games is __________.",
            ttsText: "I think playing computer games is exciting because I can fight monsters.",
            options: [
              "exciting because I can fight monsters",
              "fun because I can learn about the world",
              "creative because I can draw beautiful pictures",
              "interesting because I can feed and take care of it"
            ],
            answer: "exciting because I can fight monsters",
            explanation: "玩電腦遊戲很刺激 (exciting)，因為可以打怪獸 (because I can fight monsters)。"
          },
          {
            no: "p57-sort-1",
            type: "mc",
            stem: "分類題 (p.57)：Which items are for 【Doing magic tricks 變魔術】?",
            ttsText: "Items for doing magic tricks: black clothes, magician's hat, magic wand, and rabbit.",
            options: [
              "black clothes, magician's hat, magic wand, rabbit",
              "ruler, glue, scissors, color pencils, paper",
              "skateboard, helmet, knee pads, gloves",
              "scrapbook, sticky tape, colored pens"
            ],
            answer: "black clothes, magician's hat, magic wand, rabbit",
            explanation: "變魔術需要的物品：black clothes（黑衣）、magician's hat（魔術帽）、magic wand（魔術棒）、rabbit（兔子）。美勞需要的物品則是：ruler, glue, scissors, color pencils, paper。"
          },
          {
            no: "p57-magic",
            type: "fill",
            stem: "Doing Magic Tricks 短文填空：First, you need (1)__________ because you can look mysterious. You also need a (2)__________ because you can pull things out of it. In addition, you need a (3)__________ to help you when you say the magic words. Some magicians also think you need a (4)__________, but some people think it is cruel to use animals.",
            ttsText: "Before you start doing magic tricks, you need some things. First, you need black clothes because you can look mysterious. You also need a magician's hat because you can pull things out of it. In addition, you need a magic wand to help you when you say the magic words. Some magicians also think you need a rabbit, but some people think it is cruel to use animals.",
            options: [
              "(1) black clothes, (2) magician's hat, (3) magic wand, (4) rabbit",
              "(1) paper, (2) glue, (3) ruler, (4) scissors",
              "(1) rabbit, (2) magic wand, (3) black clothes, (4) magician's hat",
              "(1) magician's hat, (2) rabbit, (3) color pencils, (4) glue"
            ],
            answer: "(1) black clothes, (2) magician's hat, (3) magic wand, (4) rabbit",
            explanation: "(1) 看起來神祕：black clothes；(2) 從裡面變出東西：magician's hat；(3) 念咒語時幫忙：magic wand；(4) 動物：rabbit。"
          },
          {
            no: "p57-tools",
            type: "fill",
            stem: "Write the arts and crafts words next to the correct action:\n1. ruler — for drawing straight lines\n2. __________ — for sticking things\n3. __________ — for drawing on\n4. __________ — for cutting things out\n5. __________ — for decorating and coloring",
            ttsText: "1. ruler, for drawing straight lines. 2. glue, for sticking things. 3. paper, for drawing on. 4. scissors, for cutting things out. 5. color pencils, for decorating and coloring.",
            options: [
              "2. glue / 3. paper / 4. scissors / 5. color pencils",
              "2. paper / 3. scissors / 4. glue / 5. ruler",
              "2. scissors / 3. glue / 4. color pencils / 5. paper",
              "2. color pencils / 3. ruler / 4. paper / 5. glue"
            ],
            answer: "2. glue / 3. paper / 4. scissors / 5. color pencils",
            explanation: "2. 黏貼東西：glue（膠水）；3. 在上面畫畫：paper（紙）；4. 剪下東西：scissors（剪刀）；5. 裝飾與著色：color pencils（色鉛筆）。"
          }
        ]
      },
      {
        id: "u7-skateboarding",
        title: "Part 4｜寫作準備與改錯練習：Skateboarding & Review (p.58, p.60)",
        instruction: "閱讀 Skateboarding 範文並完成圖表整理與 p.60 常見 V-ing 文法改錯。",
        passage: "【Skateboarding (p.58)】\n• Introduction: Skateboarding is a fun hobby. It is exciting because you can do many tricks and go fast. But be careful! It can be dangerous if you do not do it right.\n• What do you need?: You need some things before you start riding your skateboard. First, you have to wear skate shoes. These are strong shoes that can stop you from falling off your skateboard. And please do not forget your helmet! It protects your head. It is also a good idea to buy knee pads and elbow pads for protection. A pair of gloves is also necessary. When you have all these things, you are ready to go.\n• Why do people like it?: People enjoy skateboarding because it is challenging to learn new tricks. It also gives people something exciting to do in cities—you do not need a sports ground or lots of space, just a board. It is even a quick way to travel.\n• Conclusion: Skateboarding is a healthy hobby. Everyone can enjoy it. Now go and have lots of fun!",
        passageTts: "Skateboarding. Introduction: Skateboarding is a fun hobby. It is exciting because you can do many tricks and go fast. But be careful! It can be dangerous if you do not do it right. What do you need? You need some things before you start riding your skateboard. First, you have to wear skate shoes. These are strong shoes that can stop you from falling off your skateboard. And please do not forget your helmet! It protects your head. It is also a good idea to buy knee pads and elbow pads for protection. A pair of gloves is also necessary. When you have all these things, you are ready to go. Why do people like it? People enjoy skateboarding because it is challenging to learn new tricks. It also gives people something exciting to do in cities. You do not need a sports ground or lots of space, just a board. It is even a quick way to travel. Conclusion: Skateboarding is a healthy hobby. Everyone can enjoy it. Now go and have lots of fun!",
        questions: [
          {
            no: "p58-chart",
            type: "mc",
            stem: "Complete the chart (p.58): What is skateboarding like? / What do you need? / Why do people like it?",
            ttsText: "What is this hobby like? Fun, exciting, dangerous, challenging, and healthy. What do you need? Skateboard, skate shoes, helmet, knee pads, elbow pads, and gloves. Why do people like it? Learn new tricks, do not need lots of space, and a quick way to travel.",
            options: [
              "Like: fun, exciting, dangerous, healthy | Need: skateboard, skate shoes, helmet, knee pads, elbow pads, gloves | Why: challenging to learn new tricks, don't need lots of space, quick way to travel",
              "Like: boring and slow | Need: glue, scissors, paper | Why: can stay inside all day",
              "Like: expensive | Need: computer and camera | Why: can fight monsters",
              "Like: quiet | Need: magic wand and hat | Why: can look mysterious"
            ],
            answer: "Like: fun, exciting, dangerous, healthy | Need: skateboard, skate shoes, helmet, knee pads, elbow pads, gloves | Why: challenging to learn new tricks, don't need lots of space, quick way to travel",
            explanation: "根據 p.58 短文內容整理出溜滑板的形容詞、所需裝備（滑板、滑板鞋、安全帽、護膝、護肘、手套）以及受歡迎的原因。"
          },
          {
            no: "p60-1",
            type: "mc",
            stem: "改錯題 1 (p.60)：Bike ride in the park is a great hobby. It makes you fit and healthy.",
            ttsText: "Sentence 1: Bike riding in the park is a great hobby. It makes you fit and healthy.",
            options: ["Bike ride 改為 Bike riding (或 Riding a bike)", "healthy 改為 health", "makes 改為 make", "park 改為 parking"],
            answer: "Bike ride 改為 Bike riding (或 Riding a bike)",
            explanation: "當主詞代表一項活動時，應使用動名詞 V-ing：Bike riding。"
          },
          {
            no: "p60-2",
            type: "mc",
            stem: "改錯題 2 (p.60)：Mountain climbing is an excite hobby for my family.",
            ttsText: "Sentence 2: Mountain climbing is an exciting hobby for my family.",
            options: ["excite 改為 exciting", "climbing 改為 climb", "hobby 改為 hobbies", "family 改為 families"],
            answer: "excite 改為 exciting",
            explanation: "修飾名詞 hobby（令人刺激的嗜好），應使用 V-ing 形容詞 exciting。"
          },
          {
            no: "p60-3",
            type: "mc",
            stem: "改錯題 3 (p.60)：My brother thinks play computer games makes you smart!",
            ttsText: "Sentence 3: My brother thinks playing computer games makes you smart!",
            options: ["play 改為 playing", "makes 改為 make", "thinks 改為 thinking", "smart 改為 smarting"],
            answer: "play 改為 playing",
            explanation: "在子句中當主詞（玩電腦遊戲這件事），應改為動名詞 playing computer games。"
          },
          {
            no: "p60-4",
            type: "mc",
            stem: "改錯題 4 (p.60)：Keeping a pet is a fun and interested hobby.",
            ttsText: "Sentence 4: Keeping a pet is a fun and interesting hobby.",
            options: ["interested 改為 interesting", "Keeping 改為 Keep", "fun 改為 funny", "pet 改為 pets"],
            answer: "interested 改為 interesting",
            explanation: "描述事物（嗜好）本身「有趣的」，應用 V-ing 形容詞 interesting（interested 是指人感到有興趣）。"
          },
          {
            no: "p60-5",
            type: "mc",
            stem: "改錯題 5 (p.60)：I think collect stickers is a really bored hobby.",
            ttsText: "Sentence 5: I think collecting stickers is a really boring hobby.",
            options: ["collect 改為 collecting，且 bored 改為 boring", "stickers 改為 sticker", "think 改為 thinking", "really 改為 real"],
            answer: "collect 改為 collecting，且 bored 改為 boring",
            explanation: "當主詞用動名詞 collecting stickers，且形容嗜好「無聊的」應用 boring（而非 bored）。"
          },
          {
            no: "p60-6",
            type: "mc",
            stem: "改錯題 6 (p.60)：I think gardening is bored, but my mom thinks it is interested.",
            ttsText: "Sentence 6: I think gardening is boring, but my mom thinks it is interesting.",
            options: ["bored 改為 boring，且 interested 改為 interesting", "gardening 改為 garden", "thinks 改為 think", "it 改為 they"],
            answer: "bored 改為 boring，且 interested 改為 interesting",
            explanation: "修飾 gardening（園藝這件事）令人覺得無聊或有趣，應分別改為 boring 與 interesting。"
          },
          {
            no: "p60-passage",
            type: "mc",
            stem: "短文找 4 個錯誤 (p.60 下方)：\n[Read -> Reading] is a fun hobby! People can read anywhere. Many people think reading is (1)[interest] and some stories can be very (2)[excite]. I think it is a very educational hobby because it teaches you things... Some people think (3)[read] is (4)[bore], but I think it is the best hobby for everyone.",
            ttsText: "Reading is a fun hobby! People can read anywhere. Many people think reading is interesting and some stories can be very exciting. I think it is a very educational hobby because it teaches you things. Also stories can be fun, creative and imaginative. Reading is also cheap because you can read books from the library. Some people think reading is boring, but I think it is the best hobby for everyone.",
            options: [
              "(1) interest → interesting, (2) excite → exciting, (3) read → reading, (4) bore → boring",
              "(1) interest → interested, (2) excite → excited, (3) read → reads, (4) bore → bored",
              "(1) fun → funny, (2) cheap → cheaply, (3) books → book, (4) best → good",
              "全部皆無錯誤"
            ],
            answer: "(1) interest → interesting, (2) excite → exciting, (3) read → reading, (4) bore → boring",
            explanation: "四處錯誤分別為：(1) interest 改為形容詞 interesting；(2) excite 改為形容詞 exciting；(3) read 當主詞改為動名詞 reading；(4) bore 改為形容詞 boring。"
          }
        ]
      }
    ]
  }
);
