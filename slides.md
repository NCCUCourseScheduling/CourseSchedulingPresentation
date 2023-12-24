---
theme: andyjjrt
transition: slide-left
title: Course Scheduling Presentation
mdc: true
---

# 一言不合就排課

范佳琦 田展禾 洪晙宸 莊維軒 盧奕潔 俞懿

---
layout: iframe

url: https://qrysub.nccu.edu.tw/
---
---
layout: two-cols
---

# 研究目標

<v-clicks>

- 網頁式的聊天機器人
  - 文字輸入、語音輸入
- 更精準的搜尋結果
- 直接產生出課表

</v-clicks>

::right::

<div class="flex justify-center">
  <img src="/demo.png" class="max-h-[460px]" />
</div>

---
layout: cover
---

# 實作流程

---
layout: two-cols
---

# 資料處理
歷年課程基本資料收集

<v-clicks>

1. 取得所有課程
2. 取得所有課程評價網站
3. 擷取評價資料
4. 整理至資料庫

</v-clicks>

::right::

<div class="flex justify-center items-center h-full" v-click>
  <img src="/ERM.png" />
</div>

---
layout: two-cols
---

# 資料處理
評價標籤化

- Zero-shot Classification
- 容易、有趣、輕鬆、高分、困難、沉悶、繁重、低分

::right::

<div class="flex justify-center items-center h-full">
  <img src="/label.jpg" />
</div>

---

# 資料處理
資料向量化及建立檢索器

