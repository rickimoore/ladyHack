<template>
    <footer>
        <div class="section">
            <ul class="footer--section" v-for="section in sections">
                <li class="anchor">{{section.anchor}}</li>
                <li v-for="page in section.pages">{{page.label}}</li>
            </ul>
        </div>
    </footer>
</template>
<script>
    export default{
        data: function () {
            return {
                sections: [
                    {
                        anchor: 'COMPANY',
                        pages: [
                            {link: '/home', label: 'HOME'},{link: '/features', label: 'FEATURES'}, {link: '/store', label: 'STORE'}, {link: '/home', label: 'HOME'},
                        ]
                    },
                    {
                        anchor: 'ABOUT',
                        pages: [
                            {link: '/about', label: 'ABOUT US'},{link: '/blog', label: 'BLOG'}, {link: '/privacy', label: 'PRIVACY POLICY'}, {link: '/terms', label: 'FAQ'},
                        ]
                    },
                    {
                        anchor: 'HELP',
                        pages: [
                            {link: '/help', label: 'HELP CENTER'},{link: '/help', label: 'GET STARTED'}, {link: '/contact', label: 'CONTACT US'}, {link: '/terms', label: 'TERMS OF SERVICE'},
                        ]
                    },
                    {
                        anchor: 'CONNECT',
                        pages: [
                            {link: '/help', label: 'CONNECT'},{link: '/help', label: 'SOCIAL 1'}, {link: '/contact', label: 'SOCIAL 2'}, {link: '/terms', label: 'SOCIAL 3'},
                        ]
                    }
                ]
            }
        }
    }
</script>