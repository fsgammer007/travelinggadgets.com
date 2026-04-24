    // ============================================
    // ============================================
    // PRODUCTS DATA - YAHAN SARE PRODUCTS STORE HAIN
    // ============================================
    // ============================================

    // const ek variable hai jise dobara change nahi kar sakte
    // products naam ka array hai jisme saare products ki information store hai
    const products = [
        // Yeh ek object hai jo ek product ki saari details store karta hai
        // curly braces { } ke andar product ki properties likhi hain
        {
            id: 1,  // id: har product ka unique number (1,2,3...)
            title: "Wireless Noise Cancelling Headphones",  // title: product ka naam
            imageType: "url",  // imageType: "local" means image local folder mein hai, "url" means online image
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.qzMJK19Irn-xDRraMnN6_QHaE7%3Fpid%3DApi&f=1&ipt=feac0890967ade5ca819510aea5df73051dcaae08edaa722439ac7633573f2ce&ipo=images",  // icon: image file ka path (folder/file naam)
            price: "$79.99",  // price: current price jo user ko dikhegi
            old: "$149.99",  // old: original price (discount dikhane ke liye)
            rating: 4.5,  // rating: product ki rating (1 se 5 ke beech)
            cat: "tech",  // cat: category ka short code (tech, home, beauty, fitness)
            catName: "Tech & Gadgets",  // catName: category ka full naam jo user ko dikhega
            link: "https://www.amazon.com/dp/B0D14R85TZ"  // link: affiliate product ka link
        },
        {
            id: 2,  // unique identifier for second product
            title: "20000mAh Power Bank",  // product title
            imageType: "url",  // image is stored locally
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.5XFc10A84jOde7X-PjJztQHaHa%3Fpid%3DApi&f=1&ipt=5d52f30e14b3d8922f368102e9287b280778375a4277d2484d75ba42f2776c37&ipo=images",  // path to product image
            price: "$29.99",  // current selling price
            old: "$49.99",  // original price to show discount
            rating: 4.7,  // customer rating out of 5
            cat: "tech",  // product category short code
            catName: "Tech & Gadgets",  // full category name
            link: "https://www.amazon.com/dp/B09XZ8K7M2"  // affiliate purchase link
        },
        {
            id: 3,  // unique product identifier
            title: "Universal Travel Adapter",  // name of the product
            imageType: "url",  // local image source
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.Ldpr_AaODzFwmahQLzB6jAHaE7%3Fpid%3DApi&f=1&ipt=a0c6ffd0af14c8295b5b07638a0776c363f644ca0ff0eeca1f7941f1bc0bd10f&ipo=images",  // image file path
            price: "$24.99",  // discounted price
            old: "$39.99",  // original price before discount
            rating: 4.6,  // product rating
            cat: "tech",  // category code
            catName: "Tech & Gadgets",  // category display name
            link: "https://www.amazon.com/dp/B08T9WZ7K4"  // affiliate link
        },
        {
            id: 4,  // product id number
            title: "Bluetooth Luggage Tracker",  // product title
            imageType: "url",  // image source type
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.oSWVn69PfSf9rFRtb9IeyQHaEK%3Fpid%3DApi&f=1&ipt=5c21fdc6963c3c735539a2ab4d7300124a10a5f62837143568ede5b0cb4de932&ipo=images",  // image location
            price: "$34.99",  // current price
            old: "$49.99",  // original price
            rating: 4.4,  // rating value
            cat: "tech",  // category short name
            catName: "Tech & Gadgets",  // full category name
            link: "https://www.amazon.com/dp/B08XZ7K9M2"  // affiliate purchase URL
        },
        {
            id: 5,  // unique id for product
            title: "4K Action Camera",  // product name
            imageType: "url",  // image storage type
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.ZgAc7K2SUvUeb18rrFXrSAHaHa%3Fpid%3DApi&f=1&ipt=96e048279f0d33b2e3433b3d4af348b90a3cef6e11d22a4bad58d9fa23b8dcd0&ipo=images",  // image path
            price: "$89.99",  // selling price
            old: "$199.99",  // original price for discount display
            rating: 4.8,  // product rating
            cat: "tech",  // category code
            catName: "Tech & Gadgets",  // category display name
            link: "https://www.amazon.com/dp/B07XZ8K7M2"  // affiliate link
        },
        {
            id: 6,  // product identifier
            title: "Traveling bag",  // product name
            imageType: "url",  // image source type
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.CibOBPJC3t0fXVdHGDnycgHaHa%3Fpid%3DApi&f=1&ipt=d556feaeab510a1c2f83cc1e3123cb307aeb6b04dec48f1602cd824977422dd0&ipo=images",  // image file location
            price: "$40.44",  // current price
            old: "$50",  // original price
            rating: 4.2,  // customer rating
            cat: "tech",  // category short code
            catName: "Tech & Gadgets",  // full category name
            link: "https://www.amazon.com/Maelstrom-Hiking-Backpack-40L-Lightweight/dp/B09P1HZRXH"  // affiliate purchase link
        },
        {
            id: 7,  // unique product id
            title: "Ergonomic Office Chair",  // product title
            imageType: "url",  // local image source
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.T01P_82zmxlwsBulmdN1HgHaHa%3Fpid%3DApi&f=1&ipt=3333ea9446806c0de9dce51c1098578a35c5a5c2e8061b72cf23d66f134256a9&ipo=images",  // image file path
            price: "$199.99",  // current selling price
            old: "$299.99",  // original price for discount
            rating: 4.6,  // product rating
            cat: "home",  // category code
            catName: "Home & Kitchen",  // category display name
            link: "https://www.amazon.com/dp/B08XZ7K8M2"  // affiliate link
        },
        {
            id: 8,  // product identifier number
            title: "Air Fryer 5.8QT",  // product name
            imageType: "url",  // image source type
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.0RH9dcA6dFKFCYxAQXvApAHaEQ%3Fpid%3DApi&f=1&ipt=fe24732c1f5cd2e8cc45b0be8df3756ebe0d8be72958d1baee839e14ed170271&ipo=images",  // image file location
            price: "$89.99",  // current price
            old: "$129.99",  // original price
            rating: 4.7,  // customer rating
            cat: "home",  // category short code
            catName: "Home & Kitchen",  // full category name
            link: "https://www.amazon.com/dp/B09XZ7K8M2"  // affiliate purchase link
        },
        {
            id: 9,  // unique product id
            title: "Organic Skincare Set",  // product title
            imageType: "url",  // image storage type
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.LqocpCnk2RPZ3CHf2sN3hAHaHa%3Fpid%3DApi&f=1&ipt=e9c04505dfb8eb80c2972dcc67a1796db2b45f2ee098806ba564bc494ae01ed7&ipo=images",  // image path
            price: "$39.99",  // selling price
            old: "$69.99",  // original price for discount
            rating: 4.5,  // product rating
            cat: "beauty",  // category code
            catName: "Fashion & Beauty",  // category display name
            link: "https://www.amazon.com/dp/B08XZ6K7M2"  // affiliate link
        },
        {
            id: 10,  // product identifier
            title: "Smart Fitness Tracker",  // product name
            imageType: "url",  // image source type
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.sLxW7M8HkGbcQf9s7UJ9IQHaFj%3Fpid%3DApi&f=1&ipt=2ebf35eea63970bbc67e1452638863836653f1ba29869976db5b183339235826&ipo=images",  // image file location
            price: "$49.99",  // current price
            old: "$99.99",  // original price
            rating: 4.3,  // customer rating
            cat: "fitness",  // category short code
            catName: "Health & Fitness",  // full category name
            link: "https://www.amazon.com/dp/B09XZ7K9M2"  // affiliate purchase link
        },
        {
            id : 11,
            title : "SSENSE X NEW ",
            imageType :"url",
            icon : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.BoNzGoypMNQWEAg33R2K1AHaHa%3Fpid%3DApi&f=1&ipt=bbbd8edf5f8a5153b33d26497de928fecad0133e46a61da05aa64241bc722067&ipo=images",
            price : "$750",
            old : "$800",
            rating : 4.7,
            cat : "feshion",
            catName : "Fashion & Beauty",
            link : "https://www.amazon.com/dp/B09XZ7K9M2"
        }
    ];

    // ============================================
    // ============================================
    // CATEGORY COUNTS - HAR CATEGORY MEIN KITNE PRODUCTS HAIN
    // ============================================
    // ============================================

    // function keyword se naya function banate hain
    // getCategoryCount function ka naam hai
    // catName parameter hai jo category ka naam lega (jaise "Tech & Gadgets")
    function getCategoryCount(catName) {
        // return keyword function se value wapas bhejta hai
        // products.filter() products array mein se sirf wahi items leta hai jo condition match kare
        // p => p.catName === catName ye arrow function hai, har product p ke liye check karega
        // .length return karta hai kitne items filter hue
        return products.filter(p => p.catName === catName).length;
    }

    // categories array jahan category ki information store hai
    const categories = [
        // har category ek object hai
        { name: "Tech & Gadgets", icon: "💻", count: getCategoryCount("Tech & Gadgets") },
        // getCategoryCount("Tech & Gadgets") call hoga aur return karega kitne products hain
        { name: "Home & Kitchen", icon: "🏠", count: getCategoryCount("Home & Kitchen") },
        { name: "Fashion & Beauty", icon: "💄", count: getCategoryCount("Fashion & Beauty") },
        { name: "Health & Fitness", icon: "💪", count: getCategoryCount("Health & Fitness") }
    ];

    // ============================================
    // ============================================
    // BLOG POSTS DATA
    // ============================================
    // ============================================

    // blogs array jahan blog posts ki information store hai
    const blogs = [
        // har blog post ek object hai
        { id: 1, title: "10 Best Travel Gadgets 2025", cat: "Travel", excerpt: "Essential gadgets for travelers...", imageType: "emoji", icon: "✈️" },
        { id: 2, title: "Affiliate Marketing Guide", cat: "Marketing", excerpt: "Start earning today...", imageType: "emoji", icon: "📈" },
        { id: 3, title: "Top Fitness Trackers", cat: "Fitness", excerpt: "Best budget trackers...", imageType: "emoji", icon: "💪" }
    ];

    // ============================================
    // ============================================
    // DEVICE & BROWSER DETECTION - USER KA DEVICE, OS, BROWSER, ETC.
    // ============================================
    // ============================================

    // Yeh function user ke device ki poori information nikalta hai
    function getDetailedDeviceInfo() {
        // navigator.userAgent browser se aata hai jo device ke baare mein batata hai
        // const se variable banaya jo change nahi hoga
        const ua = navigator.userAgent;
        
        // ---------- OS DETECTION (Operating System) ----------
        // let se variable banaya jo baad mein change ho sakta hai
        let os = 'Unknown';  // initially 'Unknown' set kiya
        // .indexOf() check karta hai ke string mein koi word exist karta hai ya nahi
        // !== -1 means agar word mil gaya (indexOf -1 nahi return karega)
        if (ua.indexOf('Win') !== -1) os = 'Windows';           // Agar Windows hai to os = 'Windows'
        else if (ua.indexOf('Mac') !== -1) os = 'macOS';       // Agar Mac hai to os = 'macOS'
        else if (ua.indexOf('Linux') !== -1) os = 'Linux';     // Agar Linux hai to os = 'Linux'
        else if (ua.indexOf('Android') !== -1) os = 'Android'; // Agar Android hai to os = 'Android'
        else if (ua.indexOf('iPhone') !== -1) os = 'iOS';      // Agar iPhone hai to os = 'iOS'
        else if (ua.indexOf('iPad') !== -1) os = 'iPadOS';     // Agar iPad hai to os = 'iPadOS'
        
        // ---------- DEVICE TYPE DETECTION ----------
        let deviceType = 'Desktop';  // initially 'Desktop' set kiya
        // /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i regex pattern hai
        // .test(ua) check karta hai ke userAgent string pattern se match karta hai ya nahi
        // i flag means case insensitive
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            deviceType = 'Tablet';  // agar match kiya to deviceType = 'Tablet'
        } 
        // /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i
        else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) {
            deviceType = 'Mobile';  // agar match kiya to deviceType = 'Mobile'
        }
        
        // ---------- BROWSER DETECTION ----------
        let browser = 'Unknown';  // initially 'Unknown' set kiya
        // Chrome detect: Chrome hai, Edge nahi hai, Opera nahi hai
        if (ua.indexOf('Chrome') !== -1 && ua.indexOf('Edg') === -1 && ua.indexOf('OPR') === -1) browser = 'Chrome';
        // Firefox detect
        else if (ua.indexOf('Firefox') !== -1) browser = 'Firefox';
        // Safari detect: Safari hai, Chrome nahi hai, Edge nahi hai
        else if (ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Edg') === -1) browser = 'Safari';
        // Edge detect
        else if (ua.indexOf('Edg') !== -1) browser = 'Edge';
        // Opera detect
        else if (ua.indexOf('Opera') !== -1 || ua.indexOf('OPR') !== -1) browser = 'Opera';
        
        // return keyword sab information ko object mein pack karke bhejta hai
        // object { } curly braces mein properties likhi hain
        return {
            os: os,  // operating system (Windows, macOS, etc.)
            deviceType: deviceType,  // device type (Desktop, Mobile, Tablet)
            browser: browser,  // browser name (Chrome, Firefox, etc.)
            screen: screen.width + 'x' + screen.height,  // screen resolution
            language: navigator.language,  // browser language (en-US, ur-PK, etc.)
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone  // timezone (Asia/Karachi)
        };
    }

    // ============================================
    // ============================================
    // SESSION ID GENERATION - HAR VISITOR KI UNIQUE IDENTITY
    // ============================================
    // ============================================

    // Yeh function har visitor ke liye unique session ID banata hai
    function getSessionId() {
        // localStorage browser ki memory hai jo data store karta hai
        // .getItem('session_id') localStorage se 'session_id' naam ki value read karta hai
        let sessionId = localStorage.getItem('session_id');
        
        // if (!sessionId) means agar sessionId nahi mila (null ya undefined hai)
        if (!sessionId) {
            // 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
            // Date.now() current time in milliseconds returns karta hai
            // Math.random() 0 se 1 ke beech random number generate karta hai
            // .toString(36) number ko 36-base string mein convert karta hai (0-9 a-z)
            // .substr(2, 9) string ke 2nd character se 9 characters le leta hai
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            // .setItem('session_id', sessionId) localStorage mein value save karta hai
            localStorage.setItem('session_id', sessionId);
        }
        return sessionId;  // sessionId return karo
    }

    // ============================================
    // ============================================
    // IP & LOCATION TRACKING
    // ============================================
    // ============================================

    // Yeh function IP address aur location track karta hai
    function trackIPAndLocation() {
        // getDetailedDeviceInfo() function call karke device info le rahe hain
        const deviceInfo = getDetailedDeviceInfo();
        
        // fetch() API call karne ke liye use hota hai (network request)
        // 'https://ipwho.is/' API ka URL hai jo IP info deta hai
        fetch('https://ipwho.is/')
            // .then() jab API response aayega to ye function chalega
            // response parameter mein API ka response aata hai
            .then(response => response.json())  // response ko JSON format mein convert karo
            .then(data => {  // data parameter mein converted JSON data aata hai
                // if (data.success === true) check karta hai ke API ne successful response diya ya nahi
                if (data.success === true) {
                    // saveVisitorData() function call karke data save karo
                    saveVisitorData({
                        ip: data.ip,  // IP address
                        city: data.city || 'Unknown',  // city name, agar nahi hai to 'Unknown'
                        region: data.region || 'Unknown',  // region/state name
                        country: data.country || 'Unknown',  // country name
                        country_code: data.country_code || 'Unknown',  // country code (PK, US, etc.)
                        isp: data.connection?.isp || 'Unknown',  // Internet Service Provider
                        latitude: data.latitude || 'Unknown',  // latitude coordinate
                        longitude: data.longitude || 'Unknown',  // longitude coordinate
                        timezone: data.timezone?.id || deviceInfo.timezone  // timezone
                    }, deviceInfo);  // deviceInfo bhi pass karo
                } else {
                    // API fail ho gayi to backup API try karo
                    fetch('https://api.ipify.org?format=json')  // backup API call
                        .then(res => res.json())  // response ko JSON mein convert karo
                        .then(ipData => {  // ipData mein IP address aayega
                            saveVisitorData({ 
                                ip: ipData.ip,  // sirf IP address
                                city: 'Unknown',  // city unknown
                                country: 'Unknown'  // country unknown
                            }, deviceInfo);
                        })
                        .catch(() => {  // agar backup API bhi fail ho
                            saveVisitorData(null, deviceInfo);  // null data save karo
                        });
                }
            })
            .catch(error => {  // agar main API call hi fail ho
                console.log('API Error:', error);  // console mein error log karo
                saveVisitorData(null, deviceInfo);  // null data save karo
            });
    }

    // ============================================
    // ============================================
    // VISITOR TRACKING - USER KA DATA SAVE KARNA
    // ============================================
    // ============================================

    // Yeh function visitor ka data localStorage mein save karta hai
    // locationData: IP, city, country, etc. (pehle parameter)
    // deviceInfo: Device, OS, browser, etc. (doosra parameter)
    function saveVisitorData(locationData, deviceInfo) {
        // visitorData object jahan saari information store hogi
        const visitorData = {
            // ---------- IP & LOCATION INFO ----------
            // locationData?.ip means agar locationData hai to ip le lo, nahi to 'Tracking Active'
            // ?. optional chaining hai - agar locationData null hai to error nahi aayega
            ip: locationData?.ip || 'Tracking Active',
            city: locationData?.city || 'Unknown',
            region: locationData?.region || 'Unknown',
            country: locationData?.country || 'Unknown',
            country_code: locationData?.country_code || 'Unknown',
            isp: locationData?.isp || 'Unknown',
            latitude: locationData?.latitude || 'Unknown',
            longitude: locationData?.longitude || 'Unknown',
            
            // ---------- DEVICE INFO ----------
            device_type: deviceInfo.deviceType,
            device_os: deviceInfo.os,
            browser: deviceInfo.browser,
            screen_resolution: deviceInfo.screen,
            language: deviceInfo.language,
            timezone: locationData?.timezone || deviceInfo.timezone,
            
            // ---------- TIME INFO ----------
            // new Date() current date and time create karta hai
            // .toLocaleString() ko human readable format mein convert karta hai
            visit_time: new Date().toLocaleString(),
            visit_timestamp: Date.now(),  // milliseconds since Jan 1, 1970
            visit_date: new Date().toDateString(),  // sirf date
            
            // ---------- PAGE INFO ----------
            page_visited: window.location.href,  // current page ka full URL
            page_title: document.title,  // page ka title
            referrer: document.referrer || 'Direct',  // user kahan se aaya
            
            // ---------- SESSION INFO ----------
            session_id: getSessionId()  // unique session ID
        };
        
        // ---------- SAVE TO LOCALSTORAGE ----------
        // localStorage se 'all_visitors' read karo
        // JSON.parse() string ko object mein convert karta hai
        // || '[]' means agar kuch nahi mila to empty array le lo
        let allVisitors = JSON.parse(localStorage.getItem('all_visitors') || '[]');
        // .unshift() naya item array ke START mein add karta hai (0 index par)
        allVisitors.unshift(visitorData);
        // agar visitors ki count 200 se zyada ho gayi
        if (allVisitors.length > 200) allVisitors = allVisitors.slice(0, 200);  // sirf 200 rakho
        // JSON.stringify() object ko string mein convert karta hai
        // localStorage.setItem() data save karta hai
        localStorage.setItem('all_visitors', JSON.stringify(allVisitors));
        
        // ---------- CONSOLE LOG (FOR DEBUGGING) ----------
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('✅ VISITOR TRACKED SUCCESSFULLY!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📱 DEVICE:', deviceInfo.deviceType);
        console.log('💻 OS:', deviceInfo.os);
        console.log('🌐 BROWSER:', deviceInfo.browser);
        console.log('🖥️ SCREEN:', deviceInfo.screen);
        console.log('🌍 TIMEZONE:', visitorData.timezone);
        console.log('🔤 LANGUAGE:', deviceInfo.language);
        
        // agar locationData hai aur ip hai aur city 'Unknown' nahi hai
        if (locationData?.ip && locationData?.city !== 'Unknown') {
            console.log('🌐 IP:', locationData.ip);
            console.log('📍 LOCATION:', locationData.city + ', ' + locationData.country);
            console.log('🏢 ISP:', locationData.isp);
        } else if (locationData?.ip) {
            console.log('🌐 IP:', locationData.ip);
            console.log('📍 LOCATION: Location data limited');
        }
        console.log('⏰ TIME:', new Date().toLocaleString());
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }

    // ============================================
    // ============================================
    // AFFILIATE CLICK TRACKING - JAB USER PRODUCT CLICK KARE
    // ============================================
    // ============================================

    // Yeh function tab call hota hai jab user kisi product ka "Check Price" button click kare
    function trackAffiliateClick(productId, productTitle, productPrice) {
        // getDetailedDeviceInfo() function call karke device info le rahe hain
        const deviceInfo = getDetailedDeviceInfo();
        
        // fetch() API call karne ke liye
        fetch('https://ipwho.is/')
            .then(response => response.json())  // response ko JSON mein convert karo
            .then(data => {  // data parameter mein API response aata hai
                // clickData object jahan click ki saari information store hogi
                const clickData = {
                    product_id: productId,  // product ka ID
                    product_title: productTitle,  // product ka naam
                    product_price: productPrice,  // product ki price
                    ip: data.ip || 'Unknown',  // IP address
                    city: data.city || 'Unknown',  // city name
                    region: data.region || 'Unknown',  // region name
                    country: data.country || 'Unknown',  // country name
                    isp: data.connection?.isp || 'Unknown',  // ISP
                    device_type: deviceInfo.deviceType,  // device type
                    device_os: deviceInfo.os,  // operating system
                    browser: deviceInfo.browser,  // browser name
                    screen: deviceInfo.screen,  // screen resolution
                    timezone: deviceInfo.timezone,  // timezone
                    click_time: new Date().toLocaleString(),  // click time
                    click_timestamp: Date.now(),  // click timestamp
                    session_id: getSessionId(),  // session ID
                    referrer: document.referrer || 'Direct'  // referrer
                };
                
                // localStorage se 'affiliate_clicks' read karo
                let clicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '[]');
                clicks.unshift(clickData);  // naya click array ke start mein add karo
                if (clicks.length > 200) clicks = clicks.slice(0, 200);  // sirf 200 rakho
                localStorage.setItem('affiliate_clicks', JSON.stringify(clicks));  // save karo
                
                console.log('💰 CLICK TRACKED:', productTitle);
                console.log('   IP:', data.ip, '| Location:', data.city, data.country);
                console.log('   Device:', deviceInfo.deviceType, '| Browser:', deviceInfo.browser);
            })
            .catch(() => {  // agar API call fail ho
                // Fallback data without location
                const clickData = {
                    product_id: productId,
                    product_title: productTitle,
                    product_price: productPrice,
                    ip: 'Unknown',
                    city: 'Unknown',
                    country: 'Unknown',
                    device_type: deviceInfo.deviceType,
                    device_os: deviceInfo.os,
                    browser: deviceInfo.browser,
                    screen: deviceInfo.screen,
                    timezone: deviceInfo.timezone,
                    click_time: new Date().toLocaleString(),
                    click_timestamp: Date.now(),
                    session_id: getSessionId(),
                    referrer: document.referrer || 'Direct'
                };
                
                let clicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '[]');
                clicks.unshift(clickData);
                localStorage.setItem('affiliate_clicks', JSON.stringify(clicks));
                
                console.log('💰 CLICK TRACKED:', productTitle);
                console.log('   Device:', deviceInfo.deviceType, '| Browser:', deviceInfo.browser);
            });
    }

    // ============================================
    // ============================================
    // VIEW DATA FUNCTIONS - CONSOLE MEIN DATA DEKHNE KE LIYE
    // ============================================
    // ============================================

    // Yeh function console mein saara data show karta hai
    // Type: viewAllData() in console
    function viewAllData() {
        // localStorage se saare visitors read karo
        const visitors = JSON.parse(localStorage.getItem('all_visitors') || '[]');
        // localStorage se saare clicks read karo
        const clicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '[]');
        
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📊 ALL TRACKING DATA');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📋 TOTAL VISITORS:', visitors.length);  // visitors ki total count
        console.log('📋 TOTAL CLICKS:', clicks.length);  // clicks ki total count
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('👥 RECENT VISITORS:');
        console.table(visitors.slice(0, 10));  // last 10 visitors table mein dikhao
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🖱️ RECENT CLICKS:');
        console.table(clicks.slice(0, 10));  // last 10 clicks table mein dikhao
    }

    // Yeh function dashboard statistics dikhata hai
    // Type: viewDashboard() in console
    function viewDashboard() {
        const visitors = JSON.parse(localStorage.getItem('all_visitors') || '[]');
        const clicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '[]');
        
        // Statistics ke liye empty objects banaye
        const deviceStats = {};  // device type ke liye
        const browserStats = {};  // browser ke liye
        const osStats = {};  // operating system ke liye
        const countryStats = {};  // country ke liye
        const cityStats = {};  // city ke liye
        
        // visitors array par loop chalayenge
        // .forEach() method har ek visitor par function call karta hai
        visitors.forEach(v => {
            // deviceStats[v.device_type] agar pehle se hai to usme 1 add karo, nahi to 1 set karo
            deviceStats[v.device_type] = (deviceStats[v.device_type] || 0) + 1;
            browserStats[v.browser] = (browserStats[v.browser] || 0) + 1;
            osStats[v.device_os] = (osStats[v.device_os] || 0) + 1;
            if (v.country && v.country !== 'Unknown') {
                countryStats[v.country] = (countryStats[v.country] || 0) + 1;
            }
            if (v.city && v.city !== 'Unknown') {
                cityStats[v.city] = (cityStats[v.city] || 0) + 1;
            }
        });
        
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📊 DASHBOARD STATISTICS');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📋 TOTAL VISITS:', visitors.length);
        console.log('📋 TOTAL CLICKS:', clicks.length);
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📱 DEVICE STATISTICS:');
        // Object.entries() object ko array of [key, value] pairs mein convert karta hai
        Object.entries(deviceStats).forEach(([key, val]) => {
            console.log(`   ${key}: ${val} (${((val/visitors.length)*100).toFixed(1)}%)`);
        });
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🌐 BROWSER STATISTICS:');
        Object.entries(browserStats).forEach(([key, val]) => {
            console.log(`   ${key}: ${val} (${((val/visitors.length)*100).toFixed(1)}%)`);
        });
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('💻 OS STATISTICS:');
        Object.entries(osStats).forEach(([key, val]) => {
            console.log(`   ${key}: ${val} (${((val/visitors.length)*100).toFixed(1)}%)`);
        });
        
        // agar countryStats empty nahi hai
        if (Object.keys(countryStats).length > 0) {
            console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('🌍 VISITORS BY COUNTRY:');
            Object.entries(countryStats).forEach(([key, val]) => {
                console.log(`   ${key}: ${val} (${((val/visitors.length)*100).toFixed(1)}%)`);
            });
        }
        
        if (Object.keys(cityStats).length > 0) {
            console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('🏙️ VISITORS BY CITY:');
            Object.entries(cityStats).slice(0, 5).forEach(([key, val]) => {
                console.log(`   ${key}: ${val} (${((val/visitors.length)*100).toFixed(1)}%)`);
            });
        }
    }

    // Saara data clear karne ke liye
    // Type: clearAllData() in console
    function clearAllData() {
        // confirm() popup box dikhata hai OK/Cancel ke saath
        if (confirm('⚠️ Clear all tracking data?')) {
            localStorage.removeItem('all_visitors');  // visitors data delete karo
            localStorage.removeItem('affiliate_clicks');  // clicks data delete karo
            localStorage.removeItem('session_id');  // session ID delete karo
            console.log('✅ All tracking data cleared!');
        }
    }

    // ============================================
    // ============================================
    // RENDER FUNCTIONS - WEBSITE PAR PRODUCTS/CATEGORIES DIKHANA
    // ============================================
    // ============================================

    // Yeh function product ya blog ki image HTML generate karta hai
    // item: product ya blog object, type: 'product' ya 'blog'
    function getImageHtml(item, type) {
        // var variable banane ka purana tarika (function scope)
        // imageType: agar item.imageType hai to wo le lo, nahi to 'emoji'
        var imageType = item.imageType || 'emoji';
        var icon = item.icon;  // icon (emoji ya image path)
        var title = item.title;  // product ka naam (alt text ke liye)
        // className: agar type 'product' hai to 'card-img', nahi to 'blog-img'
        var className = (type === 'product') ? 'card-img' : 'blog-img';
        
        // agar imageType 'local' hai ya 'url' hai
        if (imageType === 'local' || imageType === 'url') {
            // img tag generate karo
            return '<div class="' + className + '">' +
                '<img src="' + icon + '" alt="' + title + '" loading="lazy" style="width:100%; height:100%; object-fit:cover;" onerror="this.parentElement.innerHTML=\'<div style=\\\'display:flex;align-items:center;justify-content:center;height:100%;font-size:50px;background:linear-gradient(135deg, #667eea, #764ba2);\\\'>📷</div>\'">' +
                '</div>';
        } 
        // agar emoji hai
        else {
            // emoji div generate karo
            return '<div class="' + className + '" style="display:flex; align-items:center; justify-content:center; font-size:60px; background:linear-gradient(135deg, #667eea, #764ba2);">' + icon + '</div>';
        }
    }

    // Categories ko website par render karna
    function renderCategories() {
        // document.getElementById('categoryGrid') se HTML element dhundo
        var grid = document.getElementById('categoryGrid');
        // if (!grid) return means agar element nahi mila to function se bahar nikal jao
        if (!grid) return;
        
        var html = '';  // empty string jahan HTML collect karenge
        // for loop categories array par chalayenge
        for (var i = 0; i < categories.length; i++) {
            var cat = categories[i];  // current category
            // HTML string build karo
            html += '<div class="category-card" onclick="filterByCat(\'' + cat.name + '\')">' +
                '<div class="category-icon">' + cat.icon + '</div>' +
                '<h3>' + cat.name + '</h3>' +
                '<p>' + cat.count + ' products</p>' +
                '</div>';
        }
        grid.innerHTML = html;  // generated HTML ko grid mein set karo
    }

    // Products ko website par render karna
    function renderProducts(list) {
        var grid = document.getElementById('productGrid');
        if (!grid) return;
        
        // agar list di gayi hai to wo use karo, nahi to sab products
        var productsToRender = list || products;
        var html = '';
        
        for (var i = 0; i < productsToRender.length; i++) {
            var p = productsToRender[i];
            
            // Rating ke liye stars generate karo
            var stars = '';
            // Math.floor(p.rating) rating ko integer mein convert karta hai (4.5 -> 4)
            for (var s = 0; s < Math.floor(p.rating); s++) {
                stars += '⭐';  // star add karo
            }
            
            var imageHtml = getImageHtml(p, 'product');
            
            html += '<div class="card" data-id="' + p.id + '" data-title="' + p.title + '" data-price="' + p.price + '">' +
                imageHtml +
                '<div class="card-content">' +
                '<h3 class="card-title">' + p.title + '</h3>' +
                '<div class="rating">' + stars + ' ' + p.rating + '</div>' +
                '<div class="price">' + p.price + ' <span class="old-price">' + p.old + '</span></div>' +
                '<a href="' + p.link + '" class="buy-btn" target="_blank" rel="sponsored nofollow">Check Price →</a>' +
                '</div>' +
                '</div>';
        }
        grid.innerHTML = html;
    }

    // Blogs ko render karna
    function renderBlogs() {
        var grid = document.getElementById('blogGrid');
        if (!grid) return;
        
        var html = '';
        for (var i = 0; i < blogs.length; i++) {
            var b = blogs[i];
            var imageHtml = getImageHtml(b, 'blog');
            html += '<div class="blog-card">' +
                imageHtml +
                '<div class="blog-content">' +
                '<div class="blog-cat">' + b.cat + '</div>' +
                '<h3>' + b.title + '</h3>' +
                '<p>' + b.excerpt + '</p>' +
                '</div>' +
                '</div>';
        }
        grid.innerHTML = html;
    }

    // ============================================
    // ============================================
    // FILTER & SEARCH FUNCTIONS
    // ============================================
    // ============================================

    // Category ke according products filter karna
    function filterByCat(catName) {
        // products.filter() products array mein se wahi products leta hai jinki catName match kare
        var filtered = products.filter(p => p.catName === catName);
        renderProducts(filtered);  // filtered products render karo
        var productGrid = document.getElementById('productGrid');
        if (productGrid) productGrid.scrollIntoView({ behavior: 'smooth' });  // smooth scroll
    }

    // Search products by title
    function searchProducts() {
        var input = document.getElementById('searchInput');
        if (!input) return;
        
        var term = input.value.toLowerCase();  // search term ko lowercase mein convert karo
        if (!term) {
            renderProducts(products);  // agar term empty hai to sab products dikhao
            return;
        }
        
        // .filter() method se wahi products lete hain jin ke title mein term ho
        var filtered = products.filter(p => p.title.toLowerCase().indexOf(term) !== -1);
        renderProducts(filtered);
    }

    // ============================================
    // ============================================
    // PAGE NAVIGATION - HOME, ABOUT, CONTACT PAGES
    // ============================================
    // ============================================

    function showPage(page) {
        var home = document.getElementById('homePage');
        var about = document.getElementById('aboutPage');
        var contact = document.getElementById('contactPage');

        // sab pages ko pehle hide karo
        if (home) home.style.display = 'none';
        if (about) about.style.display = 'none';
        if (contact) contact.style.display = 'none';

        // jo page dikhana hai woh show karo
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
        window.scrollTo({ top: 0, behavior: 'smooth' });  // page top par scroll karo
    }

    // ============================================
    // ============================================
    // DARK MODE - LIGHT/DARK THEME TOGGLE
    // ============================================
    // ============================================

    function initDarkMode() {
        var btn = document.getElementById('darkModeBtn');
        if (!btn) return;
        
        // agar localStorage mein 'dark' true hai to dark mode apply karo
        if (localStorage.getItem('dark') === 'true') {
            document.body.classList.add('dark');  // body mein 'dark' class add karo
            btn.innerHTML = '☀️ Light';  // button ka text change karo
        }
        
        // button click event
        btn.onclick = function() {
            document.body.classList.toggle('dark');  // 'dark' class toggle karo (add/remove)
            var isDark = document.body.classList.contains('dark');  // check if dark mode hai
            localStorage.setItem('dark', isDark);  // preference save karo
            btn.innerHTML = isDark ? '☀️ Light' : '🌙 Dark';  // button text update karo
        };
    }

    // ============================================
    // ============================================
    // MOBILE MENU - RESPONSIVE HAMBURGER MENU
    // ============================================
    // ============================================

    function initMobileMenu() {
        var btn = document.getElementById('menuBtn');
        var menu = document.getElementById('navMenu');
        if (btn && menu) {
            btn.onclick = function() {
                menu.classList.toggle('show');  // 'show' class toggle karo
            };
            // window resize event - agar screen width 768 se zyada ho to menu hide karo
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) menu.classList.remove('show');
            });
        }
    }

    // ============================================
    // ============================================
    // FORMS - NEWSLETTER AUR CONTACT FORM
    // ============================================
    // ============================================

    function initForms() {
        // Newsletter form
        var newsletter = document.getElementById('newsletterForm');
        if (newsletter) {
            // submit event jab form submit ho
            newsletter.onsubmit = function(e) {
                e.preventDefault();  // page refresh hone se roko
                alert('✅ Subscribed! Check your email for deals.');  // success message
                newsletter.reset();  // form clear karo
            };
        }

        // Contact form
        var contact = document.getElementById('contactForm');
        if (contact) {
            contact.onsubmit = function(e) {
                e.preventDefault();
                alert('✅ Message sent! We\'ll reply soon.');
                contact.reset();
            };
        }
    }

    // ============================================
    // ============================================
    // SEARCH BUTTON FUNCTIONALITY
    // ============================================
    // ============================================

    function initSearch() {
        var btn = document.getElementById('searchBtn');
        var input = document.getElementById('searchInput');
        if (btn) btn.onclick = searchProducts;  // button click par searchProducts call karo
        if (input) input.onkeypress = function(e) {
            if (e.key === 'Enter') searchProducts();  // Enter key press par search karo
        };
    }

    // ============================================
    // ============================================
    // AFFILIATE CLICK TRACKING INITIALIZATION
    // ============================================
    // ============================================

    function initAffiliateTracking() {
        // document.addEventListener('click') poori page par click event listen karta hai
        document.addEventListener('click', function(e) {
            // .closest('.buy-btn') click element ke nearest parent jo '.buy-btn' class rakhta ho
            var link = e.target.closest('.buy-btn');
            if (link && link.href) {
                var card = link.closest('.card');  // product card dhundo
                var productId = card ? card.getAttribute('data-id') || '0' : '0';
                var productTitle = card ? card.getAttribute('data-title') || 'Unknown' : 'Unknown';
                var productPrice = card ? card.getAttribute('data-price') || 'Unknown' : 'Unknown';
                trackAffiliateClick(productId, productTitle, productPrice);  // click track karo
            }
        });
    }

    // ============================================
    // ============================================
    // INITIALIZE EVERYTHING - JAB PAGE LOAD HO
    // ============================================
    // ============================================

    // document.addEventListener('DOMContentLoaded') jab poora HTML load ho jaye to function chalaye
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🚀 Website Loaded - Tracking Active');
        
        // Sab render functions call karo
        renderCategories();  // categories render karo
        renderProducts(products);  // products render karo
        renderBlogs();  // blogs render karo
        
        // Features initialize karo
        initDarkMode();  // dark mode
        initMobileMenu();  // mobile menu
        initForms();  // forms
        initSearch();  // search
        initAffiliateTracking();  // affiliate tracking
        
        // 1 second baad IP tracking start karo
        // setTimeout() function delay se execute hota hai (milliseconds mein)
        setTimeout(function() {
            trackIPAndLocation();
        }, 1000);
    });

    // Console ke liye global functions available karo
    // window object browser ka global object hai
    window.viewAllData = viewAllData;
    window.viewDashboard = viewDashboard;
    window.clearAllData = clearAllData;