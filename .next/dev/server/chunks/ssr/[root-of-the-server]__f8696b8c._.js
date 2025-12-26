module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/utils/ProjectsInfo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectInfo",
    ()=>projectInfo
]);
const projectInfo = ()=>{
    return [
        {
            title: 'Freelance (Jarry Fall)',
            params: 'jarryfall',
            image: '/images/projects/jarryfall.webp',
            image2: 'fredo_mora/jfzy0jgrb0v4luxvkcgx',
            image3: 'fredo_mora/gyqer9tvbupc6hr9utzd',
            code: 'https://github.com/AlfredoMora06/jarry_fall_site',
            demo: 'https://jarryfall.vercel.app',
            year: '2024',
            description: 'This is a website built with React, Material-UI, and deployed on Vercel, created for Jarry Fall to showcase her work and journey as a UI/UX Designer.'
        },
        {
            title: 'Earworm',
            params: 'earworm',
            image: '/images/projects/earworm.webp',
            image2: 'fredo_mora/cmiybw6ihgebhuamthsf',
            image3: 'fredo_mora/ruk3k62g9c1rqnmivggb',
            code: 'https://github.com/AlfredoMora06/earworm_',
            demo: 'https://earwrm.io/',
            year: '2021',
            description: 'A music visualization and exploration tool based on Billboard’s Year-End charts from 1970-2020. Provides an overview of the albums on every chart year as well as data visualization to offer insights on the way music trends develop over time.'
        },
        {
            title: 'CUNY Hub',
            params: 'cuny-hub',
            image: '/images/projects/cunyhub.webp',
            image2: 'fredo_mora/fyzniouofwfdi4jco7f2',
            image3: 'fredo_mora/gbnjqe561ejrxoesupp4',
            code: 'https://github.com/nursimadonuk/CUNY_HUB_Project',
            demo: 'https://cunyhub.shinyapps.io/CUNY_HUB_Project/',
            year: '2020',
            description: 'A hub for CUNY School information and relations between CUNY schools. Attending NYC high schools we noticed there isn’t somewhere we can find info on CUNY schools all in one place. It’s hard to find what you’re looking for if you don’t know where to look.'
        },
        {
            title: 'Recipe Finder',
            params: 'recipe-finder',
            image: '/images/projects/recipefinder.webp',
            code: 'https://github.com/AlfredoMora06/RecipeFinder',
            year: '2020',
            description: "You don't know what to cook? RecipeFinder finds it for you! Recipe Finder allows you to search recipes based on the ingredients you have to your disposal. By registering with us, you can save recipes you like for future reference, and also order recipes from our store of recipes."
        },
        {
            title: 'Creativo',
            params: 'creativo',
            image: '/images/projects/creativo.webp',
            image2: 'fredo_mora/uy5e6famh5ur4ijiwwoh',
            image3: 'fredo_mora/i6xcuy43vlhfgusw8o06',
            image4: 'fredo_mora/vkr6fpp5nufrkp33pydy',
            image5: 'fredo_mora/dewxpqen6c9fmzeounvx',
            image6: 'fredo_mora/ibtcptkjxgopmsajy8cn',
            image7: 'fredo_mora/onameunabqlhlnlzvzla',
            code: 'https://github.com/AlfredoMora06/creative',
            demo: 'https://creative-lac.vercel.app/',
            year: '2020',
            description: 'A website that shows photos of NYC and a blog of responses towards Media articles of our current lives. This is an HTML/CSS website built to show MEDP 150 class content.'
        },
        {
            title: 'CUNY Yak',
            params: 'cuny-yak',
            image: '/images/projects/cunyyak.webp',
            code: 'https://github.com/AlfredoMora06/Grafic',
            year: '2020',
            description: 'For people who need someone to talk to in a local radius. A social media based app to satisfy the theme of helping with the transitioning from work to the home. The application has the user post thoughts like a discussion post.'
        },
        {
            title: 'Green Print',
            params: 'green-print',
            image: '/images/projects/greenprint.webp',
            code: 'https://github.com/AlfredoMora06/GreenPrint-Project',
            year: '2019',
            description: "What's your green print in the world? An under-construction web application built with Flask that traces individual carbon emissions (CO2 levels) for household products and vehicles, and returns their carbon footprint."
        }
    ];
};
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$ProjectsInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/ProjectsInfo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$ProjectsInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectInfo"])().map((p)=>({
            slug: p.params
        }));
}
function generateMetadata({ params } = {}) {
    if (!params?.slug) return {};
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$ProjectsInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectInfo"])().find((p)=>p.params === params.slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.description
    };
}
async function ProjectPage({ params }) {
    // `params` may be a Promise (server streaming), so await it
    const { slug } = params;
    // Redirect to index when slug is missing
    if (!slug) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/projects');
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$ProjectsInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectInfo"])().find((p)=>p.params === slug);
    if (!project) {
        const available = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$ProjectsInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectInfo"])().map((p)=>p.params).join(', ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto max-w-4xl px-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-lightGray",
                    children: "Project not found"
                }, void 0, false, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-lightGray",
                    children: [
                        "Requested slug: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: slug
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 31,
                            columnNumber: 68
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-lightGray",
                    children: [
                        "Available slugs: ",
                        available
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/projects/[slug]/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto max-w-4xl px-4 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-bold text-lightGray",
            children: project.title
        }, void 0, false, {
            fileName: "[project]/app/projects/[slug]/page.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/projects/[slug]/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f8696b8c._.js.map