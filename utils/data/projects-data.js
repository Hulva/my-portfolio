export const projectsData = [
    {
        id: 1,
        name: '安恒AiLand数据安全岛平台',
        description: "AiLAND数据安全岛平台是一个专注于保障数据安全流通，致力于解决数据共享的信任和隐私保护问题的数据开放和共享交换平台。提供多种方式用于用户数据的采集、加密，然后传输到安全岛平台计算域。提供 SQL（Hive、Spark SQL）以及内嵌 jupyter 的方式提供给用户进行模型开发的数据开发平台。以开放接口及文件下载的形式提供给用户用于模型计算结果的获取。",
        tools: ['Spring Boot', 'Spring Cloud Gateway', 'MySQL', 'MongoDB', 'RabbitMQ', 'Redis', 'Zookeeper', 'Hive', 'Spark', 'VUE', 'Docker', 'Nginx'],
        role: '核心开发/模块负责人',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'AiLAND-MPC 安全岛多方安全计算平台',
        description: '负责技术选型、架构设计、任务分配、开发进度管控，开发设计了可扩展，可复用，高性能的基于 netty 的具有连接池的多方互联的组件模块。通信链路采用 RSA 公私钥加密。架构设计采用了事件驱动和CQRS的设计思想。',
        tools: ['Spring Boot', 'Netty', "MySQL", "RockDB"],
        role: '核心开发/模块负责人',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: '分布式缓存加速系统(CacheService)',
        description: '通过配置定时job（Quartz）把sql db中的数据定时刷新到 Redis 中从而提升数据读取的性能并减轻数据库的压力。先后尝试使用 LevelDB、RocksDB 缓存数据到本地，以达到增量更新 Redis 的目的。两个 location （E4/E11对应美国的东西海岸）以及处于其中间位置的数据库机房（WH7）。4个 Redis 集群，300+ Redis 实例，2T+ 的内存数据',
        tools: ['Spring Boot', 'Redis', 'RocksDB', 'LevelDB', 'React'],
        code: '',
        role: '全栈开发',
        demo: '',
    },
    {
        id: 4,
        name: '分布式插件化调度平台(FlowPlatform)',
        description: "为了解决系统功能分散（Shell脚本定时调度的java程序、Hive Server2、Taland Job、Azkaban Job、FeedFlow）以及多版本共存的历史遗留问题，我们将其统一到一个平台。150个推广渠道，200+站点，每个站点维护一个脚本，50+特殊站点业务逻辑、功能实现、部署各有差异，于是我们将Job进行模板化抽象，Job流程插件化，实现业务复用功能复用。42.5TB Hive表数据降低到 562.2GB。新站点生成 Feed 从原来 2 days 变为 2 hours。在 URLClassLoader 基础上自定制出 PluginClassLoader，实现插件级别的环境隔离，插件用完即释放资源。",
        tools: ['Spring Boot', 'React'],
        code: '',
        demo: '',
        role: '全栈开发',
    },
    {
        id: 5,
        name: '广告投放和维护系统(AdSystem)',
        description: "AD System 是一套广告投放系统, 用户可以在系统中进行相应广告的配置",
        tools: ['Spring Boot', 'React'],
        code: '',
        demo: '',
        role: '全栈开发',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },