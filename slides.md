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
layout: iframe

url: https://qrysub.nccu.edu.tw/
---
---
layout: two-cols
---

# 資料處理
**歷年課程基本資料收集**

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
**評價標籤化**

- Zero-shot Classification
- 容易、有趣、輕鬆、高分、困難、沉悶、繁重、低分

::right::

<div class="flex justify-center items-center h-full">
  <img src="/label.jpg" />
</div>

---

# 資料處理
**資料向量化及建立檢索器**

<div class="flex items-center gap-4 py-10">
  <div class="flex flex-col gap-8">
    <div class="flex gap-4 items-center">
      <div class="h-15 w-40 p-2 rounded-lg bg-red flex items-center justify-center text-center">向量化資料</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
        <path d="M5 25 L45 25 M35 20 L45 25 L35 30" stroke="currentcolor" stroke-width="4" fill="none"/>
      </svg>
      <div class="h-15 w-20 p-2 rounded-lg bg-red flex items-center justify-center text-center">FAISS</div>
    </div>
    <div class="flex gap-4 items-center">
      <div class="h-15 w-40 p-2 rounded-lg bg-red flex items-center justify-center text-center">原始資料</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
        <path d="M5 25 L45 25 M35 20 L45 25 L35 30" stroke="currentcolor" stroke-width="4" fill="none"/>
      </svg>
      <div class="h-15 w-20 max-w-30 p-2 rounded-lg bg-red flex items-center justify-center text-center">BM25</div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" viewBox="0 0 100 150">
    <path d="M5 38 L50 75 L5 113 M50 75 L95 75 M85 70 L95 75 L85 80" stroke="currentcolor" stroke-width="4" fill="none"/>
  </svg>
  <div class="h-15 p-2 rounded-lg bg-red flex items-center justify-center text-center">Emsemble Retriever</div>
</div>

---

# 模型壓縮

- Chinese-LLaMA-Alpaca-2-13B
- llamacpp

<div class="flex flex-col gap-4 py-4">
  <div class="flex">
    <div class="w-[131px] p-2 text-center border">3.141592</div>
    <div class="w-[131px] p-2 text-center border">3.141592</div>
    <div class="w-[131px] p-2 text-center border">3.141592</div>
    <div class="w-[131px] p-2 text-center border">3.141592</div>
  </div>
  <div class="flex">
    <div class="p-2 text-center border">3.141</div>
    <div class="p-2 text-center border">3.141</div>
    <div class="p-2 text-center border">3.141</div>
    <div class="p-2 text-center border">3.141</div>
    <div class="p-2 text-center border">3.141</div>
    <div class="p-2 text-center border">3.141</div>
    <div class="p-2 text-center border">3.141</div>
    <div class="p-2 text-center border">3.141</div>
  </div>
</div>

---

# 建構RAG

<div class="flex justify-center">
  <img src="/RAG.png" class="h-[400px]" />
</div>

---
transition: fade
---

# 建構服務

<div class="flex justify-center">
  <img src="/service1.png" class="h-[400px] rounded-lg" />
</div>

---

# 建構服務

<div class="flex justify-center">
  <img src="/service2.png" class="h-[400px] rounded-lg" />
</div>

---

# 研究成果

<div class="flex justify-center">
  <img src="/result.png" class="h-[400px] rounded-lg" />
</div>

---
layout: cover
---

# 問題與討論

---

# 模型選擇

- mlcllm, llama, llama2
- <span class="text-orange">Chinese-LLaMA-Alpaca-2-13B</span>: 經中文finetune的llama2
- 由於訓練資料為大陸的資料，用語時不出現<span class="text-orange">簡體</span>及<span class="text-orange">大陸用語</span>

---

# 模型選擇


硬體設備：Nvidia RTX 3090 (24G VRAM)

1. 7B模型：13G VRAM，答非所問 
2. 13B模型：約24G VRAM，推估效果最好 
3. 13B 8bit：18G VRAM，在能力與記憶體用量之間取得較好的平衡  