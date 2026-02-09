const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันเกิดนะพี่เบ้น
ปีที่ 9 แล้วที่มุกกับพี่เบ้นยังเลือกจับมือกันเดินต่อ แม้จะมีทั้งวันที่ดีและวันที่เหนื่อย แต่พี่เบ้นก็ยังเป็นคนที่มุกอยากอยู่ข้าง ๆ เสมอ ขอบคุณที่ไม่เคยทิ้งกัน ขอบคุณความรัก ความอดทน และความเข้าใจที่มีให้มุกมาตลอด
ขอให้วันเกิดปีนี้ของพี่เบ้นเต็มไปด้วยรอยยิ้ม ความสุข และสิ่งดี ๆ และไม่ว่าอนาคตจะเป็นยังไง ขอให้รู้ไว้ว่ามุกจะอยู่ข้างพี่เบ้นแบบนี้เสมอ
รักนะ 🤍🎂
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
