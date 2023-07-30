使用 vercel 的 serverless function 搭建的 api.openai.com 代理函数

一键部署： [![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Chilfish/proxy-ai)

使用方式：将 api.openai.com 替换成 `[部署到vercel后构建的链接]/api` 即可。且由于 vercel.app 可能访问较慢，建议用 CNAME (cname.vercel-dns.com) 的形式绑定到个人域名以加速

感谢：https://github.com/Ice-Hazymoon/openai-scf-proxy （其实是因为腾讯云的免费额度过期要收费了，且服务器 ip 段有被拉黑过，还是投靠到 vercel 好了）
