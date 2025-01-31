var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "林墨瀚",
    sex: "男",
    age: "14",
    phone: "暂无",
    email: "beilingyu65@gmail.com",
    address: "现居山东省济南市",
    qq: "2113836986",
    log: "林墨瀚的自我介绍",
    excpect_work: "C++开发工程师",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "Gor For It!",
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "你好，我是林墨瀚，平阴县实验高中初二学生<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫林墨瀚，性别男，平阴县实验高中初二学生。我期望的工作岗位是 C++ 开发工程师。</p>" +
        "<p>我有着较多的 Python/C++ 编程经验，计算机基础知识掌握扎实，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，团队协同作战能力强，同时我也具备开发的能力，擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当。</p>" +
        "<p>十分期待与您的交流!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Python", 80, "red"],
        ["C++", 65, "blue"],
        ["Linux", 32, "#1abc9c"],
        ["历史", 90, "rgba(0,0,0)"],
        ["英语", 76, "yellow"],
        ["日语", 12, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>具备操作系统、计算机系统等编程基础知识。</li>" +
        "     <li>了解 Python 基础，能够进行简单编程。</li>" +
        "     <li>了解 C++ 语言开发基础，并正在学习《C++ Primer Plus》。</li>" +
        "     <li>熟悉前端开发技术，包括 HTML、CSS、JavaScript，并有基础的网页制作经验。</li>" +
        "     <li>了解 Linux 操作系统的基本命令。</li>" +
        "     <li>有使用 GitHub Pages、Jekyll 等工具构建网站的经验。</li>" +
        "     <li>有一定的游戏开发基础，曾经学习 Unreal Engine 5。</li>" +
        "     <li>对历史有浓厚兴趣，特别是近现代史及二战史。</li>" +
        "     <li>英语能力较强，能够进行日常沟通及写作。</li>" +
        "     <li>正在学习日语，具备基本的日常会话能力。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["https://pic1.imgdb.cn/item/678b8096d0e0a243d4f57570.png", "http://1.15.234.109:8000/", "个人博客", "这里记录了我的C++与算法学习笔记<br>持续更新"],
        ["https://pic1.imgdb.cn/item/678b984fd0e0a243d4f57945.png", "https://github.com/happysnaker/Gobang", "贪吃蛇", "采用Pygame编写的小游戏，在元旦派对上展出<br>2024/12/30"],
        ["https://pic1.imgdb.cn/item/678b9857d0e0a243d4f57949.png", "网址暂无", "魔方","Unreal Engine 5 开发<br>2023/12/25"]

    ],


    /**
     * 这里填写您的学习经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2017/09/01 — 2023/08/01", "<br>平阴县第二中学",
            "<p><strong>平阴县第二中学 2017级5班</strong></p>" +
            "<p>我曾在平阴县第二中学就读，这里有着严谨的教学环境和丰富的课外活动。我在学业上始终保持积极态度，尤其在英语和数学方面取得了一定进展。老师们注重培养我们的思维能力和解决问题的技巧，课堂氛围轻松而富有挑战性。</p>" +
            "<p>除了学业成就，我也积极参与学校的各类社团活动，锻炼了我的社会责任感与团队合作能力。通过这些经历，我不仅提高了自己的综合素质，也为未来的成长和发展打下了坚实的基础。</p>"
        ],

        ["2023/09/01 — 今", "<br>平阴县实验高中",
            "<p><strong>平阴县实验高中（初中部）</strong></p>" +
            "<p>我目前就读于平阴县实验高中，这是一所注重培养学生全面素质的学校。在这里，我接受了系统的学科教育，课堂教学严谨而富有挑战性，老师们深入浅出地传授知识，激发了我对学术的兴趣。特别是在理科和英语方面，我通过课外辅导和自主学习，取得了显著进步。</p>" +
            "<p>除了学业方面，学校为我们提供了丰富的课外活动和实践机会。我积极参与学校组织的社会实践活动和兴趣小组，这不仅锻炼了我的团队合作能力，还提高了我的领导力和社交能力。平阴县实验高中的学习经历，不仅为我的成长打下了坚实的基础，也让我在个人素质和综合能力上得到了全面提升。</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2024-05-09", "济南市第25届学生信息素养提升活动二等奖", "获得第二十五届济南市学生信息素养提升实践活动二等奖，我深感荣幸。激励我继续探索和学习，不断提升自我，勇攀新的高峰。"],
        ["2023-06-25", "市级优秀学生", "获得市级优秀学生荣誉，我感到非常自豪。这份荣誉不仅是对我努力的肯定，更激励我在未来的学习和生活中继续追求卓越，不断超越自己。"],
        ["2023-05-17", "济南市第24届学生信息素养提升活动二等奖", "获得二等奖，我感到非常骄傲。这是对我综合素质的认可，也激励我在未来继续挑战自我，追求卓越。"],
        ["2021-04-05", "县级优秀学生", "获得县级优秀学生荣誉，我深感荣幸。这不仅是对我努力的肯定，更激励我继续努力，不断进步。"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["https://pic1.imgdb.cn/item/678b989ed0e0a243d4f57951.png", "https://blog.csdn.net/linmohan0814?spm=1000.2115.3001.5343", "我的CSDN主页"],
        ["https://pic1.imgdb.cn/item/678b98a6d0e0a243d4f57953.png", "https://github.com/LINMOH", "我的GitHub主页"],
        ["https://pic1.imgdb.cn/item/678b98aed0e0a243d4f57956.png", "https://linmoh.github.io/", "我的个人博客"],
        ["https://pic1.imgdb.cn/item/678b986dd0e0a243d4f5794e.png", "https://space.bilibili.com/2126856300?spm_id_from=..0.0", "我的B站主页"],
        ["https://pic1.imgdb.cn/item/678b98b6d0e0a243d4f5795b.png", "https://www.zhihu.com/people/lin-56-61-20", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "https://pic1.imgdb.cn/item/678b98d9d0e0a243d4f5796c.jpg",
        "https://pic1.imgdb.cn/item/678b98f8d0e0a243d4f5797b.jpg",
        "https://pic1.imgdb.cn/item/678b991ad0e0a243d4f57980.png",
        "https://pic1.imgdb.cn/item/678b9927d0e0a243d4f57985.jpg"
    ]

}
