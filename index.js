const app = document.getElementById('app');
const video = document.getElementById('bg-video');
const volIcon = document.getElementById('volume-icon');

// 1. ระบบควบคุมเสียง
function toggleMute() {
    if (video.muted) {
        video.muted = false;
        volIcon.innerText = "🔊";
    } else {
        video.muted = true;
        volIcon.innerText = "🔈";
    }
}

function enableSound() {
    if (video) {
        video.muted = false;
        video.volume = 0.5;
        video.play();
        volIcon.innerText = "🔊";
    }
}

// 2. หน้าหลัก
function showHome() {
    app.innerHTML = `
        <div class="card animate__animated animate__fadeIn">
            <h1>HAPPY VALENTINE'S DAY ❤️</h1>
            <p>ยินดีต้อนรับสู่โลกของคนน่ารัก</p>
            <div style="margin-top: 20px;">
                <button onclick="handleStart()">เริ่มเล่นเกม</button>
                <button onclick="handleDesc()">อ่านคำอธิบาย</button>
            </div>
        </div>
    `;
}

function handleStart() { enableSound(); startGame(); }
function handleDesc() { enableSound(); showDescription(); }

// 3. หน้าคำอธิบาย (จดหมาย)
function showDescription() {
    app.innerHTML = `
        <div class="card animate__animated animate__backInDown">
            <div class="letter">
                <h3 style="color: #ff4d6d;">💌 ถึงเปา...</h3>
                <p>" เว็บนี้ทำให้ เปาสุดน่ารัก เพื่อให้ในวันวาเลนไทน์ "</p>
                <button onclick="showHome()" style="background: #333;">กลับหน้าหลัก</button>
            </div>
        </div>
    `;
}

// 4. ระบบแจ้งเตือนเมื่อตอบผิด
function wrongAnswer() {
    Swal.fire({
        title: 'โกรธแล้วนะ! 💢',
        text: 'ให้โอกาสแก้ตัวอีกรอบ!',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3591/3591410.png',
        imageWidth: 80,
        confirmButtonText: 'ลองใหม่',
        confirmButtonColor: '#ff4d6d',
        allowOutsideClick: false
    });
}

// 5. ด่านต่างๆ
function startGame() {
    app.innerHTML = `
        <div class="card animate__animated animate__fadeInRight">
            <h2>ด่านที่ 1</h2>
            <p>วันครบรอบคือวันที่เท่าไหร่?</p>
            <button onclick="wrongAnswer()">1 / 1 / 2026</button>
            <button onclick="wrongAnswer()">2 / 1 / 2026</button>
            <button onclick="level2()">1 / 7 / 2025</button>
        </div>
    `;
}

function level2() {
    app.innerHTML = `
        <div class="card animate__animated animate__fadeInRight">
            <h2>ด่านที่ 2</h2>
            <p>เราเจอกันครั้งแรกที่ไหน?</p>
            <button onclick="wrongAnswer()">สวนสาธารณะ</button>
            <button onclick="level3()">ที่วิทลัย</button>
            <button onclick="wrongAnswer()">ห้างสรรพสินค้า</button>
        </div>
    `;
}

function level3() {
    app.innerHTML = `
        <div class="card animate__animated animate__fadeInRight">
            <h2>ด่านที่ 3</h2>
            <p>อยากได้อะไรเป็นพิเศษไหมครับ?</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <div onclick="confirmGift('ดอกไม้', 'https://s.isanook.com/cl/0/up/2014/02/164644550-600x399.jpg')">
                    <img src="https://s.isanook.com/cl/0/up/2014/02/164644550-600x399.jpg" class="item-img"><br>
                    <button>ดอกไม้</button>
                </div>
                <div onclick="confirmGift('ดอกโตน', 'https://img.icons8.com/color/1200/18-plus.jpg')">
                    <img src="https://img.icons8.com/color/1200/18-plus.jpg" class="item-img"><br>
                    <button>ดอกโตน</button>
                </div>
                <div onclick="confirmGift('ไปหา', 'https://prodigits.co.uk/pthumbs/screensavers/down/cartoon-anime/driver_y9xsrl2n.gif')">
                    <img src="https://prodigits.co.uk/pthumbs/screensavers/down/cartoon-anime/driver_y9xsrl2n.gif" class="item-img"><br>
                    <button>ไปหา</button>
                </div>
            </div>
        </div>
    `;
}

function confirmGift(name, imgUrl) {
    Swal.fire({
        title: 'แน่ใจแล้วใช่มั้ย?',
        text: `จะเลือก "${name}" จริงๆ หรอ?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'แน่ใจ!',
        cancelButtonText: 'คิดดูก่อน',
        confirmButtonColor: '#ff4d6d'
    }).then((result) => {
        if (result.isConfirmed) showFinal(name, imgUrl);
    });
}

function showFinal(name, imgUrl) {
    app.innerHTML = `
        <div class="card animate__animated animate__zoomIn">
            <h2>จัดไปตามคำขอ!</h2>
            <img src="${imgUrl}" style="width:180px; border-radius:15px; margin: 15px 0;">
            <p>แคปหน้าจอส่งให้ <strong>xacz_b</strong> ได้เลย!</p>
            <button onclick="showHome()">กลับหน้าหลัก</button>
        </div>
    `;
}

showHome();