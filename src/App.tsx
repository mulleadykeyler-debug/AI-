import { motion, useScroll, useTransform } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  ChevronRight,
  Download,
  MapPin,
  Calendar,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    title: "学生会官方公众号运营",
    description: "负责官方公众号运营，撰写活动推文、通知公告20余篇，累计阅读量达5000+，显著提升了校园活动的曝光度与影响力。",
    tags: ["内容创作", "新媒体运营", "文案策划"],
    image: "https://picsum.photos/seed/social-media/800/600",
    link: "#",
    github: "#"
  },
  {
    title: "校园活动视觉设计",
    description: "协助设计校园活动海报、宣传单页15张，结合活动主题优化设计风格，贴合学生审美，获得师生广泛好评。",
    tags: ["Photoshop", "平面设计", "品牌宣传"],
    image: "https://picsum.photos/seed/creative-work/800/600",
    link: "#",
    github: "#"
  },
  {
    title: "行政归档流程优化",
    description: "在行政办公室实习期间，累计整理各类通知、报表300余份，通过优化归档流程，使文件查找效率提升了30%。",
    tags: ["行政管理", "流程优化", "效率提升"],
    image: "https://picsum.photos/seed/office-admin/800/600",
    link: "#",
    github: "#"
  }
];

const experience = [
  {
    company: "四川工商学院行政办公室",
    role: "学生助理",
    period: "2024.03 - 2024.06",
    description: "负责办公室日常文件整理、分类归档；协助老师接待来访师生80余人次；协助组织校级教职工会议、学生干部培训等活动4场。",
    location: "成都"
  },
  {
    company: "学校学生会宣传部",
    role: "干事",
    period: "2022.10 - 2023.10",
    description: "负责官方公众号运营及推文撰写；设计校园活动海报及宣传单页；配合团队完成校园文化节、迎新晚会等大型活动的宣传工作。",
    location: "成都"
  }
];

const skills = {
  professional: ["Office 办公套件", "基础 Photoshop", "公文写作", "沟通协调", "文字编辑"],
  language: ["普通话二级甲等", "英语 CET-4"],
  certificates: ["计算机二级 MS Office", "普通话等级证书"]
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#1a1a1a] selection:bg-[#c5a059]/30">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-heading font-bold tracking-tight"
          >
            马克塞 | MA KESAI
          </motion.span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-black/60">
            {[
              { label: "关于我", id: "about" },
              { label: "实践经历", id: "projects" },
              { label: "教育背景", id: "experience" },
              { label: "联系方式", id: "contact" }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="hover:text-[#c5a059] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="rounded-full border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            立即沟通
          </Button>
        </div>
      </nav>

      {/* 英雄区 */}
      <section id="about" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="mb-4 border-[#c5a059] text-[#c5a059] px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
                意向：行政助理 / 新媒体运营
              </Badge>
              <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[0.9] tracking-tighter">
                追求 <span className="italic font-normal text-[#c5a059]">卓越</span> 的行政与运营实践者。
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-black/60 max-w-lg leading-relaxed"
            >
              我是马克塞，一名工商管理专业的学生。具备较强的细心度和执行力，善于沟通协作，致力于在行政协助与宣传运营领域不断成长。
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <Button size="lg" className="bg-[#1a1a1a] text-white hover:bg-black rounded-full px-8" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                查看实践成果
              </Button>
              <div className="flex items-center gap-4 ml-4">
                <a href="mailto:maxsai123@163.com" className="p-2 hover:text-[#c5a059] transition-colors"><Mail size={20} /></a>
                <span className="text-sm font-medium text-black/40">138XXXX8901</span>
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="relative hidden md:block"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl rotate-3">
              <img 
                src="https://picsum.photos/seed/professional-man/800/1000" 
                alt="个人肖像" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl -rotate-6 border border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center text-[#c5a059]">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-black/40">当前状态</p>
                  <p className="font-heading font-bold">在校学生 (可全职实习)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 实践成果区 */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-heading font-bold">实践成果</h2>
              <p className="text-black/60 max-w-md">在校园工作与实习实践中积累的代表性成果。</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-none bg-transparent shadow-none">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardHeader className="p-0 space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/5 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-2xl font-heading">{project.title}</CardTitle>
                    <CardDescription className="text-black/60 line-clamp-3 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 技能与经历区 */}
      <section id="experience" className="py-24 px-6 bg-[#fdfcfb]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">技能与 <br /><span className="text-[#c5a059]">证书</span></h2>
              <p className="text-black/60">熟练掌握办公软件与新媒体工具，具备良好的文字功底与沟通能力。</p>
            </div>

            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
                    {category === 'professional' && <><Palette size={14} /> 专业技能</>}
                    {category === 'language' && <><Terminal size={14} /> 语言能力</>}
                    {category === 'certificates' && <><Cpu size={14} /> 资格证书</>}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {items.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-white border border-black/5 px-4 py-2 rounded-xl text-sm font-medium hover:border-[#c5a059] transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Tabs defaultValue="experience" className="w-full">
              <div className="flex items-center justify-between mb-8 border-b border-black/5 pb-4">
                <TabsList className="bg-transparent h-auto p-0 gap-8">
                  <TabsTrigger value="experience" className="p-0 h-auto bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-[#c5a059] data-[state=active]:shadow-none text-xl font-heading font-bold relative after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-[2px] after:bg-[#c5a059] after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform">
                    校园/实习经历
                  </TabsTrigger>
                  <TabsTrigger value="education" className="p-0 h-auto bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-[#c5a059] data-[state=active]:shadow-none text-xl font-heading font-bold relative after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-[2px] after:bg-[#c5a059] after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform">
                    教育背景
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="experience" className="mt-0 space-y-8">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={exp.company}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative pl-8 border-l border-black/5"
                  >
                    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-black/10 group-hover:bg-[#c5a059] transition-colors" />
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/5 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-black/40 font-medium">
                        <span className="flex items-center gap-1"><Briefcase size={14} /> {exp.company}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                      </div>
                      <p className="text-black/60 leading-relaxed pt-2">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
              
              <TabsContent value="education" className="mt-0 space-y-8">
                <div className="group relative pl-8 border-l border-black/5">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-black/10 group-hover:bg-[#c5a059] transition-colors" />
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h3 className="text-xl font-bold">四川工商学院 | 工商管理专业</h3>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/5 px-3 py-1 rounded-full">
                          2022.09 - 2026.06
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-black/40 font-medium">
                        <span className="flex items-center gap-1"><Briefcase size={14} /> 本科 (预计毕业)</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> 成都</span>
                      </div>
                      <p className="text-black/60 leading-relaxed pt-2">
                        核心课程：管理学原理、市场营销学、财务管理、公文写作、人力资源管理（平均成绩85分，专业排名前20%）。
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-widest text-black/40">荣誉奖项</p>
                      <ul className="text-sm text-black/60 space-y-1 list-disc list-inside">
                        <li>2022-2023学年校级二等奖学金</li>
                        <li>2023-2024学年校级三好学生</li>
                        <li>2023年校级公文写作大赛三等奖</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* 联系区 */}
      <section id="contact" className="py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-heading font-bold">期待与您 <span className="italic font-normal text-[#c5a059]">交流</span></h2>
            <p className="text-xl text-black/60">如果您正在寻找一名踏实负责、执行力强的实习生，欢迎随时与我联系。</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full md:w-auto bg-[#1a1a1a] text-white hover:bg-black rounded-full px-12 h-14 text-lg" onClick={() => window.location.href = 'mailto:maxsai123@163.com'}>
              发送邮件联系
            </Button>
            <div className="flex items-center gap-4 text-xl font-heading font-bold">
              <span className="text-black/40 text-sm uppercase tracking-widest">电话:</span>
              138XXXX8901
            </div>
          </div>

          <div className="pt-12 flex items-center justify-center gap-12">
            <a href="mailto:maxsai123@163.com" className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">邮箱</span>
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 px-6 bg-[#fdfcfb] border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-black/40 font-medium">
            © 2026 马克塞. 个人作品集.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-black/40">
            <a href="#" className="hover:text-[#c5a059] transition-colors">回到顶部</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
