// 实验配置文件
const experimentConfig = {
    // 实验控制参数
    control: {
        minViewTime: 5 * 60,  // 最少浏览时间（秒）
        minInteractions: 5,    // 最少互动次数
        maxSessionTime: 30 * 60  // 最长会话时间（秒）
    },

    // 控制变量
    controls: {
        imageCount: 1,          // 每篇配图数量
        topicDistribution: 'balanced', // 主题均衡分布
        randomization: {
            postSelection: true, // 随机选择展示文章
            displayOrder: true   // 随机展示顺序
        }
    },

    // 内容配置
    "content": {
        "totalPosts": 20,         // 基础文章库20篇
        "categories": ["food", "pets", "beauty", "travel"], // 确保主题分布均衡
        "versions": {
            "human": {
                "posts": 20       // 20篇人工撰写的基础文章
            },
            "ai": {
                "posts": 20       // 对应的20篇AI改写版本
            }
        },
        "groupSetup": {
            "A": {
                "postsCount": 10,  // 每个用户看10篇
                "source": "human"  // 全部人工版本
            },
            "B": {
                "postsCount": 10,  // 每个用户看10篇
                "source": "mixed", // 混合版本
                "ratio": {
                    "human": 0.5,  // 5篇人工
                    "ai": 0.5      // 5篇AI改写
                }
            }
        }
    },

    // 数据收集配置
    dataCollection: {
        trackingMetrics: [
            'viewTime',
            'scrollDepth',
            'interactionCount',
            'aiIdentification',
            'engagement'
        ],
        samplingRate: 1000  // 数据采样率（毫秒）
    }
};
