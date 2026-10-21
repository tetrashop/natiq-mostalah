// Cloudflare Worker - نطق مصطلح نسخه ۳.۰ (Self-contained)
// بدون وابستگی به Node.js، بدون import خارجی

// ===== نرمال‌سازی فارسی =====
function normalizePersian(text) {
    return String(text)
        .replace(/ي/g, 'ی')
        .replace(/ك/g, 'ک')
        .replace(/[\u064B-\u065F\u0670]/g, '')
        .replace(/\u200c/g, ' ')
        .replace(/\u200f|\u200e/g, '')
        .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
        .replace(/[.,:;؛،!?«»()\[\]{}"'\/\\@#$%^&*_+=|<>~`\-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

// ===== حوزه‌های تخصصی =====
const DOMAINS = [
    {
        name: 'رشد شخصی و خودسازی',
        depth: 5,
        keywords: ['خودسازی','خود سازی','رشد شخصی','رشد فردی','خودم را بسازم','خودم را ساختن','بهبود خود','توسعه فردی','توسعه شخصی','خودشناسی','پیشرفت شخصی','پیشرفت فردی','خودآگاهی','self improvement','تمرین شخصی'],
        response: `برای رشد شخصی و خودسازی، این مسیر پیشنهادی است:

🎯 **پنج گام عملی:**

۱. **خودآگاهی**: روزانه ۱۰ دقیقه در مورد باورها، ارزش‌ها و احساسات خود بنویسید.

۲. **هدف‌گذاری SMART**: یک هدف کوچک (مثلاً ۳۰ روز) تعیین کنید؛ مشخص، قابل اندازه‌گیری، دست‌یافتنی، مرتبط و زمان‌دار.

۳. **عادت‌سازی تدریجی**: هر عادت جدید را ۲۱ روز تمرین کنید؛ از کم شروع کنید.

۴. **بازخورد مستمر**: هفتگی از یک دوست یا مربی بازخورد بگیرید.

۵. **یادگیری فعال**: هر ماه یک کتاب یا دوره در حوزه رشد شخصی بخوانید.

💡 **تمرین‌های روزانه:**
• صبح: ۵ دقیقه مدیتیشن یا نوشتن سه اولویت روز
• در طول روز: یک کار که کمی خارج از منطقه راحتی است
• شب: ۳ دقیقه مرور دستاوردها و درس‌ها

📊 **شاخص پیشرفت:** هر هفته یک "لاگ رشد" بنویسید و سرعت پیشرفت را بسنجید.`
    },
    {
        name: 'تعادل زندگی و کار',
        depth: 5,
        keywords: ['تعادل زندگی','تعادل کار','work life balance','زندگی و کار','کار و زندگی','زندگی کاری','فرسودگی شغلی','burnout','استرس کاری','زمان برای خانواده','زمان شخصی','تعادل'],
        response: `برای رسیدن به تعادل زندگی و کار:

⚖️ **چهار بعدی که باید متعادل شوند:**

۱. **کاری**: اهداف شغلی با مرزهای زمانی مشخص
۲. **خانوادگی**: زمان کیفی بدون موبایل
۳. **شخصی**: سلامت جسم و روان، علایق
۴. **اجتماعی**: روابط و مشارکت اجتماعی

📊 **نکات کلیدی:**

• **مرزبندی مشخص**: ساعت پایان کار را ثابت کنید؛ به همکاران اطلاع دهید.
• **نه گفتن**: هر "بله" به یک کار، "نه" به کار دیگر است.
• **تفویض**: کارهای تکراری را به دیگران بسپارید.
• **بلوک‌های زمانی**: در تقویم، "زمان خانواده" و "زمان خودم" را قطعی کنید.
• **بازبینی ماهانه**: بررسی کنید آیا ابعاد چهارگانه متعادل هستند.

🎯 **تمرین این هفته:** یک روز در هفته را "بدون کار" تعیین کنید و از قبل برایش برنامه داشته باشید.`
    },
    {
        name: 'مدیریت زمان و بهره‌وری',
        depth: 4,
        keywords: ['مدیریت زمان','بهره‌وری','productivity','تایم منیجمنت','کارآمدی','کارآمدتر','زمان بندی','وقت کم','پومودورو','pomodoro','آیزنهاور','اولویت بندی','بهره'],
        response: `برای بهبود مدیریت زمان و بهره‌وری:

🎯 **چهار تکنیک اثبات‌شده:**

۱. **پومودورو**: ۲۵ دقیقه کار → ۵ دقیقه استراحت → هر ۴ دور، ۲۰ دقیقه استراحت.

۲. **ماتریس آیزنهاور**: مهم و فوری → امروز؛ مهم غیرفوری → برنامه؛ غیرمهم فوری → تفویض؛ غیرمهم غیرفوری → حذف.

۳. **قانون ۲ دقیقه**: اگر کاری زیر ۲ دقیقه است، همان لحظه انجام دهید.

۴. **بلوک‌های عمیق**: ۹۰ دقیقه کار بدون نوتیفیکیشن، برای کارهای خلاق.

🔄 **عادات پایه:**
• هر شب برای فردا ۳ اولویت بنویسید
• تلفن را در "مزاحم نشوید" بگذارید
• نوتیفیکیشن‌های غیرضروری را خاموش کنید`
    },
    {
        name: 'روابط و ارتباطات',
        depth: 4,
        keywords: ['رابطه','روابط','ارتباطات','مهارت ارتباط','گوش دادن','همدلی','مذاکره','تعارض','مصاحبه شغلی','مصاحبه','interview','سخنرانی','ارائه','presentation','متقاعدسازی','استرس در محیط کار'],
        response: `برای بهبود روابط و مهارت‌های ارتباطی:

🗣️ **چهار مهارت کلیدی:**

۱. **گوش دادن فعال**: قبل از پاسخ، خلاصه‌ی حرف طرف مقابل را تکرار کنید.

۲. **همدلی**: احساس طرف مقابل را نام ببرید ("به نظر می‌رسه نگرانید").

۳. **من پیام**: به جای "تو اشتباه می‌کنی"، بگویید "من وقتی این اتفاق می‌افتد، احساس ناخوشایندی دارم".

۴. **مذاکره برد-برد**: به جای تقسیم منابع، به دنبال راه‌حل مشترک باشید.

💡 **برای مصاحبه شغلی:**
• داستان STAR آماده کنید (Situation, Task, Action, Result)
• ۲-۳ سؤال هوشمند از مصاحبه‌گر بپرسید
• ۱۰ دقیقه قبل، تنفس عمیق

📊 **تمرین روزانه:** یک مکالمه امروز را "فقط گوش دادن" باشید.`
    },
    {
        name: 'تصمیم‌گیری و حل مسئله',
        depth: 4,
        keywords: ['تصمیم','تصمیم‌گیری','حل مسئله','problem solving','انتخاب سخت','دوراهی','تضاد','تحلیل تصمیم','مزایا معایب','trade-off','ریسک'],
        response: `برای تصمیم‌گیری و حل مسئله:

🧩 **پنج گام منطقی:**

۱. **تعریف دقیق مسئله**: بنویسید "دقیقاً چه چیزی مشکل است؟" — یک جمله مشخص.

۲. **تولید گزینه‌ها**: حداقل ۳ گزینه (حتی غیرواقعی) طوفان فکری کنید.

۳. **معیارها**: ۳-۵ معیار مهم (زمان، هزینه، ریسک، ارزش‌ها) تعیین کنید.

۴. **ارزیابی**: هر گزینه را در هر معیار از ۱ تا ۵ نمره دهید.

۵. **بازبینی**: ۲۴ ساعت صبر کنید، سپس نهایی کنید.

📊 **قانون ۱۰/۱۰/۱۰:**
• ۱۰ دقیقه بعد چه حسی دارم؟
• ۱۰ ماه بعد چه؟
• ۱۰ سال بعد چه؟

💡 **تکنیک ۵ چرا:** ۵ بار بپرسید "چرا؟" تا به ریشه برسید.`
    },
    {
        name: 'مهارت‌های حرفه‌ای و کاری',
        depth: 4,
        keywords: ['مهارت کاری','مهارت حرفه‌ای','شغل','کار حرفه‌ای','رزومه','cv','رزومه نویسی','سابقه کار','مقاله','دستاورد','دست آورد','نوآوری','تکنولوژی','همگام','به‌روز','رهبری','مدیریت تیم','leadership'],
        response: `برای رشد مهارت‌های حرفه‌ای و کاری:

🎯 **چهار محور:**

۱. **مهارت سخت**: هر ۶ ماه یک مهارت فنی جدید (زبان، ابزار، نرم‌افزار) در حد متوسط یاد بگیرید.

۲. **مهارت نرم**: ارتباط، مذاکره، رهبری — در بلندمدت تعیین‌کننده‌اند.

۳. **شبکه‌سازی**: ماهانه حداقل یک نفر جدید در حوزه کاری خود ملاقات کنید.

۴. **برند شخصی**: فایل "دستاوردها" داشته باشید — هر دستاورد را با عدد ثبت کنید.

📝 **برای مقاله یا سخنرانی:**
• ساختار: قلاب → مشکل → راه‌حل → داستان → فراخوان
• شروع با داستان یا آمار شوکه‌کننده
• ۳-۴ پیام کلیدی — نه بیشتر

📊 **برای رزومه:** هر بولت را با عدد شروع کنید ("۳۰٪ افزایش").`
    }
];

// ===== تحلیل سؤال =====
function analyzeQuestion(rawQuestion) {
    const normalized = normalizePersian(rawQuestion);
    for (const domain of DOMAINS) {
        for (const kw of domain.keywords) {
            if (normalized.includes(normalizePersian(kw))) {
                return { matched: true, concept: domain.name, depth: domain.depth, response: domain.response };
            }
        }
    }
    return {
        matched: false,
        concept: 'خارج از دامنه تخصصی',
        depth: 2,
        response: `سؤال شما در حوزه‌های تخصصی این سیستم نیست. 🤔

🎯 **حوزه‌های تخصصی نطق مصطلح:**
• رشد شخصی و خودسازی
• مهارت‌های حرفه‌ای و کاری
• مدیریت زمان و بهره‌وری
• روابط و ارتباطات
• تصمیم‌گیری و حل مسئله
• تعادل زندگی و کار

💡 **مثال‌های واقعی:**
• "چطور عادت مطالعه روزانه بسازم؟"
• "برای مصاحبه شغلی چطور آماده شوم؟"
• "چطور استرس کاری را کاهش دهم؟"

📌 سؤال خود را با یکی از این حوزه‌ها بازنویسی کنید.`
    };
}

// ===== صفحه اصلی =====
function getHomePage() {
    return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>نطق مصطلح پیشرفته - نسخه ۳.۰</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI',Tahoma,sans-serif;background:linear-gradient(135deg,#667eea,#764ba2);min-height:100vh;padding:20px;direction:rtl}
.container{max-width:800px;margin:0 auto;background:rgba(255,255,255,0.98);border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.3);overflow:hidden}
.header{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:30px;text-align:center}
.header h1{font-size:1.8em;margin-bottom:10px}
.header p{opacity:0.9;font-size:0.95em}
.privacy-note{background:#fff3cd;padding:15px;margin:15px 20px;border-radius:10px;font-size:0.9em;border-right:4px solid #ffc107}
.chat-box{padding:20px;height:420px;overflow-y:auto;background:#f8f9fa}
.user,.bot{padding:12px 16px;margin:10px 0;border-radius:12px;line-height:1.7;max-width:92%}
.user{background:#e3f2fd;margin-right:auto}
.bot{background:#fff;border-right:3px solid #667eea}
.analysis{margin-top:10px;padding:8px 12px;background:#fff3cd;border-radius:6px;font-size:0.85em}
.input-area{display:flex;gap:10px;padding:20px;background:#fff}
input[type="text"]{flex:1;padding:14px 18px;border:2px solid #e1e8ed;border-radius:10px;font-size:15px;font-family:inherit}
input[type="text"]:focus{outline:none;border-color:#667eea}
button{padding:14px 28px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;border-radius:10px;font-size:15px;cursor:pointer;font-weight:600}
button:disabled{opacity:0.5;cursor:not-allowed}
</style></head>
<body><div class="container">
<div class="header"><h1>🧠 نطق مصطلح پیشرفته</h1><p>نسخه ۳.۰ — تحلیل هوشمند سوالات فارسی</p></div>
<div class="privacy-note"><strong>📢 توجه:</strong> این سیستم از حریم شخصی محافظت می‌کند.</div>
<div class="chat-box" id="chatBox">
<div class="bot"><strong>سیستم پیشرفته فعال! 🚀</strong><br>سؤالات خود را در حوزه‌های تخصصی بپرسید.</div>
</div>
<div class="input-area">
<input type="text" id="questionInput" placeholder="مثلاً: چطور تعادل زندگی و کار بسازم؟">
<button id="sendBtn" onclick="sendQuestion()">ارسال</button>
</div></div>
<script>
async function sendQuestion(){
const input=document.getElementById('questionInput');
const question=input.value.trim();
if(!question)return;
const chatBox=document.getElementById('chatBox');
const sendBtn=document.getElementById('sendBtn');
chatBox.innerHTML+='<div class="user"><strong>شما:</strong> '+esc(question)+'</div>';
const lid='loading-'+Date.now();
chatBox.innerHTML+='<div class="bot" id="'+lid+'">⏳ در حال تحلیل...</div>';
chatBox.scrollTop=chatBox.scrollHeight;
input.value='';sendBtn.disabled=true;
try{
const r=await fetch('/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question})});
const d=await r.json();
document.getElementById(lid).remove();
if(d.success){
const a=d.analysis?'<div class="analysis">🎯 '+esc(d.analysis.primaryConcept)+' | 💡 عمق: '+d.analysis.depthLevel+'/5</div>':'';
const txt=d.response.split('\\n').map(l=>esc(l)).join('<br>');
chatBox.innerHTML+='<div class="bot"><strong>نطق مصطلح:</strong><br>'+txt+a+'</div>';
}else{
chatBox.innerHTML+='<div class="bot" style="color:red">خطا: '+esc(d.error||'ناشناخته')+'</div>';
}
}catch(e){
document.getElementById(lid).remove();
chatBox.innerHTML+='<div class="bot" style="color:red">خطای شبکه: '+esc(e.message)+'</div>';
}
sendBtn.disabled=false;chatBox.scrollTop=chatBox.scrollHeight;
}
function esc(t){const d=document.createElement('div');d.textContent=t;return d.innerHTML}
document.getElementById('questionInput').addEventListener('keypress',function(e){if(e.key==='Enter')sendQuestion()});
</script></body></html>`;
}

// ===== Worker اصلی =====
export default {
    async fetch(request, env, ctx) {
        const cors = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        };
        if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

        const url = new URL(request.url);

        if (request.method === 'GET' && url.pathname === '/') {
            return new Response(getHomePage(), {
                headers: { 'Content-Type': 'text/html; charset=utf-8', ...cors }
            });
        }

        if (url.pathname === '/api/health') {
            return new Response(JSON.stringify({
                status: 'healthy', version: '3.0.0',
                domains: DOMAINS.map(d => d.name),
                timestamp: new Date().toISOString()
            }), { headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors } });
        }

        if (request.method === 'POST' && (url.pathname === '/' || url.pathname === '/api/ask')) {
            try {
                const { question } = await request.json();
                if (!question || typeof question !== 'string' || question.trim().length < 2) {
                    return new Response(JSON.stringify({ success: false, error: 'سؤال معتبر ارائه نشده است' }), {
                        status: 400, headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors }
                    });
                }
                const analysis = analyzeQuestion(question);
                return new Response(JSON.stringify({
                    success: true, question,
                    response: analysis.response,
                    analysis: { primaryConcept: analysis.concept, depthLevel: analysis.depth, matched: analysis.matched },
                    metadata: { version: '3.0.0', timestamp: new Date().toISOString() }
                }), { headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors } });
            } catch (err) {
                return new Response(JSON.stringify({ success: false, error: 'خطا: ' + err.message }), {
                    status: 500, headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors }
                });
            }
        }

        return new Response(JSON.stringify({ success: false, error: 'مسیر یافت نشد' }), {
            status: 404, headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors }
        });
    }
};
