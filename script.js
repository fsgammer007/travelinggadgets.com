// ============================================
// ============================================
// AFFILIATE WEBSITE - NO TRACKING + SOCIAL SHARE
// PRODUCTS + BLOGS (JSON FORMAT)
// SHARE ON: WhatsApp, Instagram, Twitter, Facebook
// ============================================
// ============================================

// ============================================
// PRODUCTS DATA (JSON FORMAT)
// ============================================
const products = [
    {
        id: 1,
        title: "Wireless Noise Cancelling Headphones",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.qzMJK19Irn-xDRraMnN6_QHaE7%3Fpid%3DApi&f=1&ipt=feac0890967ade5ca819510aea5df73051dcaae08edaa722439ac7633573f2ce&ipo=images",
        price: "$79.99",
        old: "$149.99",
        rating: 4.5,
        cat: "tech",
        catName: "Tech & Gadgets",
        link: "https://www.amazon.com/dp/B0D14R85TZ"
    },
    {
        id: 2,
        title: "20000mAh Power Bank",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.5XFc10A84jOde7X-PjJztQHaHa%3Fpid%3DApi&f=1&ipt=5d52f30e14b3d8922f368102e9287b280778375a4277d2484d75ba42f2776c37&ipo=images",
        price: "$29.99",
        old: "$49.99",
        rating: 4.7,
        cat: "tech",
        catName: "Tech & Gadgets",
        link: "https://www.amazon.com/dp/B09XZ8K7M2"
    },
    {
        id: 3,
        title: "Universal Travel Adapter",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.Ldpr_AaODzFwmahQLzB6jAHaE7%3Fpid%3DApi&f=1&ipt=a0c6ffd0af14c8295b5b07638a0776c363f644ca0ff0eeca1f7941f1bc0bd10f&ipo=images",
        price: "$24.99",
        old: "$39.99",
        rating: 4.6,
        cat: "tech",
        catName: "Tech & Gadgets",
        link: "https://www.amazon.com/dp/B08T9WZ7K4"
    },
    {
        id: 4,
        title: "Bluetooth Luggage Tracker",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.oSWVn69PfSf9rFRtb9IeyQHaEK%3Fpid%3DApi&f=1&ipt=5c21fdc6963c3c735539a2ab4d7300124a10a5f62837143568ede5b0cb4de932&ipo=images",
        price: "$34.99",
        old: "$49.99",
        rating: 4.4,
        cat: "tech",
        catName: "Tech & Gadgets",
        link: "https://www.amazon.com/dp/B08XZ7K9M2"
    },
    {
        id: 5,
        title: "4K Action Camera",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.ZgAc7K2SUvUeb18rrFXrSAHaHa%3Fpid%3DApi&f=1&ipt=96e048279f0d33b2e3433b3d4af348b90a3cef6e11d22a4bad58d9fa23b8dcd0&ipo=images",
        price: "$89.99",
        old: "$199.99",
        rating: 4.8,
        cat: "tech",
        catName: "Tech & Gadgets",
        link: "https://www.amazon.com/dp/B07XZ8K7M2"
    },
    {
        id: 6,
        title: "Traveling Bag",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.CibOBPJC3t0fXVdHGDnycgHaHa%3Fpid%3DApi&f=1&ipt=d556feaeab510a1c2f83cc1e3123cb307aeb6b04dec48f1602cd824977422dd0&ipo=images",
        price: "$40.44",
        old: "$50",
        rating: 4.2,
        cat: "tech",
        catName: "Tech & Gadgets",
        link: "https://www.amazon.com/Maelstrom-Hiking-Backpack-40L-Lightweight/dp/B09P1HZRXH"
    },
    {
        id: 7,
        title: "Ergonomic Office Chair",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.T01P_82zmxlwsBulmdN1HgHaHa%3Fpid%3DApi&f=1&ipt=3333ea9446806c0de9dce51c1098578a35c5a5c2e8061b72cf23d66f134256a9&ipo=images",
        price: "$199.99",
        old: "$299.99",
        rating: 4.6,
        cat: "home",
        catName: "Home & Kitchen",
        link: "https://www.amazon.com/dp/B08XZ7K8M2"
    },
    {
        id: 8,
        title: "Air Fryer 5.8QT",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.0RH9dcA6dFKFCYxAQXvApAHaEQ%3Fpid%3DApi&f=1&ipt=fe24732c1f5cd2e8cc45b0be8df3756ebe0d8be72958d1baee839e14ed170271&ipo=images",
        price: "$89.99",
        old: "$129.99",
        rating: 4.7,
        cat: "home",
        catName: "Home & Kitchen",
        link: "https://www.amazon.com/dp/B09XZ7K8M2"
    },
    {
        id: 9,
        title: "Organic Skincare Set",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.LqocpCnk2RPZ3CHf2sN3hAHaHa%3Fpid%3DApi&f=1&ipt=e9c04505dfb8eb80c2972dcc67a1796db2b45f2ee098806ba564bc494ae01ed7&ipo=images",
        price: "$39.99",
        old: "$69.99",
        rating: 4.5,
        cat: "beauty",
        catName: "Fashion & Beauty",
        link: "https://www.amazon.com/dp/B08XZ6K7M2"
    },
    {
        id: 10,
        title: "Smart Fitness Tracker",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.sLxW7M8HkGbcQf9s7UJ9IQHaFj%3Fpid%3DApi&f=1&ipt=2ebf35eea63970bbc67e1452638863836653f1ba29869976db5b183339235826&ipo=images",
        price: "$49.99",
        old: "$99.99",
        rating: 4.3,
        cat: "fitness",
        catName: "Health & Fitness",
        link: "https://www.amazon.com/dp/B09XZ7K9M2"
    },
    {
        id: 11,
        title: "SSENSE X NEW",
        imageType: "url",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.BoNzGoypMNQWEAg33R2K1AHaHa%3Fpid%3DApi&f=1&ipt=bbbd8edf5f8a5153b33d26497de928fecad0133e46a61da05aa64241bc722067&ipo=images",
        price: "$750",
        old: "$800",
        rating: 4.7,
        cat: "fashion",
        catName: "Fashion & Beauty",
        link: "https://www.amazon.com/dp/B09XZ7K9M2"
    }
];

// ============================================
// CATEGORIES
// ============================================
function getCategoryCount(catName) {
    return products.filter(p => p.catName === catName).length;
}

const categories = [
    { name: "Tech & Gadgets", icon: "💻", count: getCategoryCount("Tech & Gadgets") },
    { name: "Home & Kitchen", icon: "🏠", count: getCategoryCount("Home & Kitchen") },
    { name: "Fashion & Beauty", icon: "💄", count: getCategoryCount("Fashion & Beauty") },
    { name: "Health & Fitness", icon: "💪", count: getCategoryCount("Health & Fitness") }
];

// ============================================
// BLOGS DATA (JSON FORMAT)
// ============================================
const blogs = [
    {
        id: 1,
        title: "10 Best Travel Gadgets 2025",
        cat: "Travel",
        excerpt: "Essential gadgets for travelers including noise-cancelling headphones, power banks, universal adapters, and more. Expert tested recommendations.",
        imageType: "emoji",
        icon: "✈️",
        date: "April 25, 2026",
        readTime: "6 min read",
        fullContent: `<h2>Top 10 Travel Gadgets You Need in 2025</h2>
        <p>Traveling smart means having the right gear. After testing 50+ products, here are our top picks:</p>
        <h3>1. Wireless Noise Cancelling Headphones</h3>
        <p>Perfect for long flights. Blocks engine noise and crying babies. 30+ hour battery life. Our top pick offers crystal clear sound and comfortable memory foam ear cushions.</p>
        <h3>2. 20000mAh Power Bank</h3>
        <p>Never run out of battery. Charges your phone 4-5 times. Fast charging support. Lightweight design under 400g.</p>
        <h3>3. Universal Travel Adapter</h3>
        <p>Works in 150+ countries. Built-in USB-C and USB-A ports. Surge protection included.</p>
        <h3>4. Bluetooth Luggage Tracker</h3>
        <p>Never lose your bags. Track your luggage via phone. 1-year battery life.</p>
        <h3>5. 4K Action Camera</h3>
        <p>Capture adventures underwater or on mountains. Waterproof and shockproof.</p>
        <h3>6. Compact Travel Drone</h3>
        <p>Aerial photography made easy. Folds to pocket size. 4K video quality.</p>
        <h3>7. E-Reader</h3>
        <p>Carry thousands of books in one device. Paper-like display, weeks of battery.</p>
        <h3>8. Portable Wi-Fi Hotspot</h3>
        <p>Stay connected anywhere. Avoid expensive roaming charges.</p>
        <h3>9. Travel-Friendly Power Strip</h3>
        <p>3 AC outlets + 4 USB ports. Flat plug fits behind furniture.</p>
        <h3>10. Smart Language Translator</h3>
        <p>Break language barriers. Translate 100+ languages in real-time.</p>
        <p><strong>Final Verdict:</strong> Start with headphones, power bank, and adapter. Check prices above!</p>`
    },
    {
        id: 2,
        title: "Affiliate Marketing Guide 2025",
        cat: "Marketing",
        excerpt: "Start earning today with affiliate marketing. Complete guide for beginners including program selection, content creation, and traffic generation.",
        imageType: "emoji",
        icon: "📈",
        date: "April 24, 2026",
        readTime: "8 min read",
        fullContent: `<h2>Complete Affiliate Marketing Guide for Beginners</h2>
        <p>Affiliate marketing is the best way to earn passive income online. Here's your complete guide.</p>
        <h3>What is Affiliate Marketing?</h3>
        <p>Companies pay you commission (5% to 50%) for sending customers who buy. You share unique affiliate links. When someone clicks and purchases, you earn money.</p>
        <h3>Best Affiliate Programs for Beginners</h3>
        <p><strong>Amazon Associates:</strong> Millions of products, 4-10% commission, easy approval.<br>
        <strong>ShareASale:</strong> 4500+ merchants, reliable payments.<br>
        <strong>CJ Affiliate:</strong> Big brands like Home Depot.<br>
        <strong>ClickBank:</strong> Digital products, up to 75% commission.</p>
        <h3>Step-by-Step to Start</h3>
        <p><strong>Step 1:</strong> Choose your niche (travel, tech, fitness, beauty)<br>
        <strong>Step 2:</strong> Build platform (website, YouTube, or social media)<br>
        <strong>Step 3:</strong> Join affiliate programs (start with Amazon)<br>
        <strong>Step 4:</strong> Create valuable content (reviews, comparisons, best-of lists)<br>
        <strong>Step 5:</strong> Drive traffic (SEO, Pinterest, social media)</p>
        <h3>Pro Tips</h3>
        <p>✅ Disclose affiliate links clearly<br>
        ✅ Promote products you actually use<br>
        ✅ Compare prices across sites<br>
        ✅ Use multiple affiliate programs<br>
        ✅ Track what works with analytics</p>
        <h3>How Much Can You Earn?</h3>
        <p>Beginner: $100-500/month<br>
        Part-time: $1000-3000/month<br>
        Full-time: $5000-20000+ monthly</p>
        <p><strong>Ready to start?</strong> Click any "Check Price" button above to see how it works!</p>`
    },
    {
        id: 3,
        title: "Top Fitness Trackers Under $100",
        cat: "Fitness",
        excerpt: "Best budget fitness trackers including step counting, heart rate monitoring, sleep tracking, and battery life comparison.",
        imageType: "emoji",
        icon: "💪",
        date: "April 23, 2026",
        readTime: "5 min read",
        fullContent: `<h2>Top 10 Fitness Trackers Under $100</h2>
        <p>You don't need to spend $300+ on fitness trackers. Here are the best under $100.</p>
        <h3>What to Look For</h3>
        <p>• Step counting accuracy (within 5% of expensive brands)<br>
        • Heart rate monitoring (24/7 tracking)<br>
        • Sleep analysis (deep, light, REM stages)<br>
        • Battery life (minimum 5-7 days)<br>
        • Water resistance (IP68 for swimming)</p>
        <h3>Top Picks</h3>
        <p><strong>1. Xiaomi Mi Band 8 - $45</strong><br>
        Best overall value. 1.62-inch AMOLED, 16 days battery, 150+ sport modes.</p>
        <p><strong>2. Amazfit Bip 5 - $89</strong><br>
        Built-in GPS, 1.9-inch display, 10 days battery, Alexa built-in.</p>
        <p><strong>3. Fitbit Inspire 3 - $99</strong><br>
        Premium brand, stress management, 10 days battery, best app.</p>
        <p><strong>4. Redmi Smart Band Pro - $55</strong><br>
        AMOLED display, 14 days battery, blood oxygen tracking.</p>
        <p><strong>5. Realme Band 2 - $35</strong><br>
        Best ultra-budget, 1.4-inch display, 12 days battery.</p>
        <h3>Which One Should You Buy?</h3>
        <p>• iPhone users: Fitbit Inspire 3<br>
        • Android users: Xiaomi Mi Band 8<br>
        • Budget limited: Realme Band 2<br>
        • Want GPS: Amazfit Bip 5</p>
        <p>Check our Smart Fitness Tracker above for current deals!</p>`
    },
    {
        id: 4,
        title: "Home & Kitchen Essentials Under $50",
        cat: "Home",
        excerpt: "Transform your home with affordable essentials including air fryer, organizers, cleaning tools, and smart devices all under $50.",
        imageType: "emoji",
        icon: "🏠",
        date: "April 22, 2026",
        readTime: "7 min read",
        fullContent: `<h2>15 Home & Kitchen Essentials Under $50</h2>
        <p>Small home upgrades make daily living better. Here are 15 products under $50.</p>
        <h3>Kitchen Essentials</h3>
        <p><strong>1. Air Fryer 5.8QT - $49.99</strong><br>
        Cook crispy fries with 80% less oil. Digital controls, dishwasher-safe.</p>
        <p><strong>2. Vegetable Chopper - $19</strong><br>
        Chop onions without crying. 4 interchangeable blades, dishwasher safe.</p>
        <p><strong>3. Glass Food Storage Set - $35</strong><br>
        20-piece glass containers with airtight lids. Oven, microwave, freezer safe.</p>
        <p><strong>4. Electric Kettle - $45</strong><br>
        Temperature control for tea/coffee. 1.7L capacity, keep warm function.</p>
        <h3>Home Organization</h3>
        <p><strong>5. Under-Sink Organizer - $28</strong><br>
        Pull-out drawers, adjustable shelves. Fits most cabinets.</p>
        <p><strong>6. Closet Shelf Dividers - $22</strong><br>
        8-pack, no tools needed. Categorize sweaters, jeans, towels.</p>
        <p><strong>7. Over-The-Door Shoe Rack - $25</strong><br>
        Holds 24 pairs, zero floor space used. Clear pockets.</p>
        <p><strong>8. Cord Organizer Box - $18</strong><br>
        5-pack, hide messy cables. Wood grain finish.</p>
        <h3>Cleaning Tools</h3>
        <p><strong>9. Electric Spin Scrubber - $45</strong><br>
        4 interchangeable heads, 300 RPM, 90-minute battery.</p>
        <p><strong>10. Reusable Mop Pads - $20</strong><br>
        10-pack, machine washable 100+ times. Save $100 yearly.</p>
        <h3>Smart Home</h3>
        <p><strong>11. Smart Plug 4-Pack - $39</strong><br>
        Voice control with Alexa/Google. Energy monitoring, schedules.</p>
        <p><strong>12. Motion Sensor Light - $28</strong><br>
        3-pack, battery-powered, 300 lumens, 6-month battery life.</p>
        <h3>Money-Saving Tips</h3>
        <p>✅ Buy multi-packs - cheaper per item<br>
        ✅ Wait for Amazon coupons - often 20-30% off<br>
        ✅ Check "Used - Like New" - 30-50% off<br>
        ✅ Buy during Prime Day and Black Friday</p>
        <p>Check our Home & Kitchen products above for today's best deals!</p>`
    }
];

// ============================================
// SOCIAL SHARE FUNCTION - WhatsApp, Instagram, Twitter, Facebook
// ============================================

// Function to share on WhatsApp
function shareOnWhatsApp(blogTitle, blogUrl) {
    const message = `Check out this amazing article: ${blogTitle}\n\nRead it here: ${blogUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Function to share on Twitter
function shareOnTwitter(blogTitle, blogUrl) {
    const tweetText = `${blogTitle} - Must read! ✈️\n\n${blogUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank');
}

// Function to share on Facebook
function shareOnFacebook(blogUrl) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`;
    window.open(facebookUrl, '_blank');
}

// Function to share on Instagram (opens Instagram app/profile)
function shareOnInstagram() {
    // Instagram doesn't have direct share API, so we copy link and prompt user
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
        alert('📱 Link copied! Now open Instagram and share this link in your story or post.\n\nYou can also tag us @travelinggadgets');
    });
}

// Function to copy link (for any other platform)
function copyBlogLink(blogUrl, blogTitle) {
    navigator.clipboard.writeText(blogUrl).then(() => {
        alert(`✅ Link copied!\n\nNow you can paste it anywhere - Instagram DM, Telegram, Snapchat, or any other app.\n\nArticle: ${blogTitle}`);
    });
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function getImageHtml(item, type) {
    const className = (type === 'product') ? 'card-img' : 'blog-img';
    
    if (item.imageType === 'url' || item.imageType === 'local') {
        return `<div class="${className}">
            <img src="${item.icon}" alt="${item.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover;" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:50px;background:linear-gradient(135deg,#667eea,#764ba2);\'>📷</div>'">
        </div>`;
    } else {
        return `<div class="${className}" style="display:flex; align-items:center; justify-content:center; font-size:60px; background:linear-gradient(135deg, #667eea, #764ba2);">${item.icon}</div>`;
    }
}

function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    if (!grid) return;
    
    let html = '';
    for (let i = 0; i < categories.length; i++) {
        const cat = categories[i];
        html += `<div class="category-card" onclick="filterByCat('${cat.name}')">
            <div class="category-icon">${cat.icon}</div>
            <h3>${cat.name}</h3>
            <p>${cat.count} products</p>
        </div>`;
    }
    grid.innerHTML = html;
}

function renderProducts(list) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    const productsToRender = list || products;
    let html = '';
    
    for (let i = 0; i < productsToRender.length; i++) {
        const p = productsToRender[i];
        
        let stars = '';
        for (let s = 0; s < Math.floor(p.rating); s++) {
            stars += '⭐';
        }
        
        const imageHtml = getImageHtml(p, 'product');
        
        html += `<div class="card" data-id="${p.id}" data-title="${p.title.replace(/'/g, "\\'")}" data-price="${p.price}">
            ${imageHtml}
            <div class="card-content">
                <h3 class="card-title">${p.title}</h3>
                <div class="rating">${stars} ${p.rating}</div>
                <div class="price">${p.price} <span class="old-price">${p.old}</span></div>
                <a href="${p.link}" class="buy-btn" target="_blank" rel="sponsored nofollow">Check Price →</a>
            </div>
        </div>`;
    }
    grid.innerHTML = html;
}

function renderBlogs() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    let html = '';
    for (let i = 0; i < blogs.length; i++) {
        const b = blogs[i];
        const imageHtml = getImageHtml(b, 'blog');
        
        html += `<div class="blog-card" onclick="openBlogModal(${b.id})" style="cursor: pointer;">
            ${imageHtml}
            <div class="blog-content">
                <div class="blog-cat">${b.cat}</div>
                <h3>${b.title}</h3>
                <div style="display: flex; gap: 12px; margin: 10px 0; font-size: 0.75rem; color: var(--text-light);">
                    <span>📅 ${b.date}</span>
                    <span>⏱️ ${b.readTime}</span>
                </div>
                <p>${b.excerpt.substring(0, 100)}${b.excerpt.length > 100 ? '...' : ''}</p>
                <div style="margin-top: 15px;">
                    <span style="color: var(--primary); font-weight: 500; font-size: 14px;">📖 Read Full Article →</span>
                </div>
            </div>
        </div>`;
    }
    grid.innerHTML = html;
}

// ============================================
// BLOG MODAL WITH SOCIAL SHARE BUTTONS (WhatsApp, Instagram, Twitter, Facebook)
// ============================================
function openBlogModal(blogId) {
    const blog = blogs.find(b => b.id === blogId);
    if (!blog) return;
    
    const isDark = document.body.classList.contains('dark');
    const bgColor = isDark ? '#1a1a2e' : '#ffffff';
    const textColor = isDark ? '#ffffff' : '#1a1a2e';
    
    // Get current page URL for sharing
    const currentUrl = window.location.href.split('#')[0];
    const shareUrl = currentUrl + '#blog-' + blog.id;
    
    const modal = document.createElement('div');
    modal.id = 'blogModal';
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 99999; overflow-y: auto;';
    
    modal.innerHTML = `
        <div style="max-width: 800px; margin: 30px auto; background: ${bgColor}; border-radius: 20px; overflow: hidden; position: relative; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
            <button onclick="closeBlogModal()" style="position: absolute; top: 15px; right: 15px; background: #ff6b35; color: white; border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 20px; cursor: pointer; z-index: 10; transition: all 0.3s;">✕</button>
            
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; color: white;">
                <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 25px; font-size: 14px; margin-bottom: 15px;">${blog.cat}</div>
                <h1 style="margin: 15px 0; font-size: 28px;">${blog.title}</h1>
                <div style="display: flex; gap: 15px; opacity: 0.9;">
                    <span>📅 ${blog.date}</span>
                    <span>⏱️ ${blog.readTime}</span>
                </div>
            </div>
            
            <div style="padding: 30px; color: ${textColor}; line-height: 1.8;">
                ${blog.fullContent || blog.content || '<p>Content coming soon...</p>'}
            </div>
            
            <!-- SOCIAL SHARE SECTION - Share on WhatsApp, Instagram, Twitter, Facebook -->
            <div style="padding: 20px 30px; background: ${isDark ? '#16213e' : '#f8f9fa'}; border-top: 1px solid ${isDark ? '#444' : '#e2e8f0'}; border-bottom: 1px solid ${isDark ? '#444' : '#e2e8f0'};">
                <h3 style="margin: 0 0 15px 0; text-align: center;">📱 Share this article with friends</h3>
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <!-- WhatsApp Share Button -->
                    <button onclick="shareOnWhatsApp('${blog.title.replace(/'/g, "\\'")}', '${shareUrl}')" style="background: #25D366; color: white; border: none; padding: 12px 20px; border-radius: 50px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px; transition: transform 0.2s;">
                        📱 WhatsApp
                    </button>
                    
                    <!-- Twitter Share Button -->
                    <button onclick="shareOnTwitter('${blog.title.replace(/'/g, "\\'")}', '${shareUrl}')" style="background: #1DA1F2; color: white; border: none; padding: 12px 20px; border-radius: 50px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px; transition: transform 0.2s;">
                        🐦 Twitter
                    </button>
                    
                    <!-- Facebook Share Button -->
                    <button onclick="shareOnFacebook('${shareUrl}')" style="background: #1877F2; color: white; border: none; padding: 12px 20px; border-radius: 50px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px; transition: transform 0.2s;">
                        📘 Facebook
                    </button>
                    
                    <!-- Instagram Share Button (Copies Link) -->
                    <button onclick="shareOnInstagram()" style="background: #E4405F; color: white; border: none; padding: 12px 20px; border-radius: 50px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px; transition: transform 0.2s;">
                        📸 Instagram
                    </button>
                    
                    <!-- Copy Link Button (For any other platform) -->
                    <button onclick="copyBlogLink('${shareUrl}', '${blog.title.replace(/'/g, "\\'")}')" style="background: #666; color: white; border: none; padding: 12px 20px; border-radius: 50px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px; transition: transform 0.2s;">
                        🔗 Copy Link
                    </button>
                </div>
                <p style="text-align: center; font-size: 12px; margin-top: 15px; opacity: 0.7;">
                    💡 Tip: Share on Instagram Stories, Telegram, Snapchat, or any other app using "Copy Link"
                </p>
            </div>
            
            <div style="padding: 20px 30px; text-align: center; border-top: 1px solid ${isDark ? '#444' : '#e2e8f0'};">
                <button onclick="closeBlogModal()" style="background: #ff6b35; color: white; border: none; padding: 12px 30px; border-radius: 40px; cursor: pointer; font-weight: bold; transition: transform 0.2s;">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeBlogModal();
        }
    };
}

function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// FILTER & SEARCH FUNCTIONS
// ============================================
function filterByCat(catName) {
    const filtered = products.filter(p => p.catName === catName);
    renderProducts(filtered);
    const productGrid = document.getElementById('productGrid');
    if (productGrid) productGrid.scrollIntoView({ behavior: 'smooth' });
}

function searchProducts() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
    const term = input.value.toLowerCase();
    if (!term) {
        renderProducts(products);
        return;
    }
    
    const filtered = products.filter(p => p.title.toLowerCase().indexOf(term) !== -1);
    renderProducts(filtered);
}

function showPage(page) {
    const home = document.getElementById('homePage');
    const about = document.getElementById('aboutPage');
    const contact = document.getElementById('contactPage');
    
    if (home) home.style.display = 'none';
    if (about) about.style.display = 'none';
    if (contact) contact.style.display = 'none';
    
    if (page === 'home') {
        if (home) home.style.display = 'block';
        renderProducts(products);
    } else if (page === 'about') {
        if (about) about.style.display = 'block';
    } else if (page === 'contact') {
        if (contact) contact.style.display = 'block';
    } else if (page === 'reviews') {
        if (home) home.style.display = 'block';
        renderProducts(products);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// DARK MODE
// ============================================
function initDarkMode() {
    const btn = document.getElementById('darkModeBtn');
    if (!btn) return;
    
    if (localStorage.getItem('dark') === 'true') {
        document.body.classList.add('dark');
        btn.innerHTML = '☀️ Light';
    }
    
    btn.onclick = function() {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('dark', isDark);
        btn.innerHTML = isDark ? '☀️ Light' : '🌙 Dark';
    };
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('navMenu');
    if (btn && menu) {
        btn.onclick = function() {
            menu.classList.toggle('show');
        };
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) menu.classList.remove('show');
        });
    }
}

// ============================================
// FORMS
// ============================================
function initForms() {
    const newsletter = document.getElementById('newsletterForm');
    if (newsletter) {
        newsletter.onsubmit = function(e) {
            e.preventDefault();
            alert('✅ Subscribed! Check your email for deals.');
            newsletter.reset();
        };
    }
    
    const contact = document.getElementById('contactForm');
    if (contact) {
        contact.onsubmit = function(e) {
            e.preventDefault();
            alert('✅ Message sent! We\'ll reply soon.');
            contact.reset();
        };
    }
}

// ============================================
// SEARCH
// ============================================
function initSearch() {
    const btn = document.getElementById('searchBtn');
    const input = document.getElementById('searchInput');
    if (btn) btn.onclick = searchProducts;
    if (input) input.onkeypress = function(e) {
        if (e.key === 'Enter') searchProducts();
    };
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Traveling Gadgets Website Loaded');
    console.log('✅ No Tracking - Privacy Friendly');
    console.log('✅ Social Share Available - WhatsApp, Instagram, Twitter, Facebook');
    
    renderCategories();
    renderProducts(products);
    renderBlogs();
    
    initDarkMode();
    initMobileMenu();
    initForms();
    initSearch();
});

// Make share functions global so buttons can access them
window.shareOnWhatsApp = shareOnWhatsApp;
window.shareOnTwitter = shareOnTwitter;
window.shareOnFacebook = shareOnFacebook;
window.shareOnInstagram = shareOnInstagram;
window.copyBlogLink = copyBlogLink;
window.filterByCat = filterByCat;
window.searchProducts = searchProducts;
window.showPage = showPage;
window.openBlogModal = openBlogModal;
window.closeBlogModal = closeBlogModal;

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ All features ready!');
console.log('   📱 Share articles on WhatsApp');
console.log('   🐦 Share articles on Twitter');
console.log('   📘 Share articles on Facebook');
console.log('   📸 Share on Instagram (link copied)');
console.log('   🔗 Copy link for any other platform');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
