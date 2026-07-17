<div align="center">

# 如意金股 RuyiDailyStockAnalysis

> 🤖 基于 AI 大模型的 A股/港股/美股自选股智能分析系统
> 每日自动分析并推送「决策仪表盘」到企业微信/飞书/Telegram/Discord/Slack/邮箱

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Ready-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)

**开发者：张大鹏 ｜ 维护：林姗姗**

---

</div>

## ✨ 功能特性

| 能力 | 说明 |
|------|------|
| **AI 决策报告** | 核心结论、评分、趋势、买卖点位、风险警报、催化因素、操作检查清单 |
| **多市场覆盖** | A股、港股、美股、日股、韩股、台股及 ETF |
| **Web 工作台** | 手动分析、任务进度、历史报告、Markdown 报告、Agent 问股、回测、持仓管理 |
| **Agent 策略问股** | 支持均线、缠论、波浪、趋势、热点、事件、成长、预期等 15 种策略 |
| **智能导入** | 图片、CSV/Excel、剪贴板导入；股票代码/名称/拼音/别名补全 |
| **自动化推送** | GitHub Actions、Docker、本地定时、企业微信/飞书/Telegram/Discord/Slack/邮件 |

## 🚀 快速开始

### 本地运行

```bash
# 克隆
git clone https://github.com/tepliza-tlz/RuyiDailyStockAnalysis.git
cd RuyiDailyStockAnalysis

# 安装依赖
pip install -r requirements.txt

# 配置环境变量
cp .env.example .env
# 编辑 .env，填入 API Key 和自选股

# 启动 Web 服务
python main.py --serve-only

# 访问 http://127.0.0.1:8000
```

### 配置说明

你需要配置以下至少一项：

| 变量 | 说明 |
|------|------|
| `DEEPSEEK_API_KEY` | DeepSeek API Key（推荐，性价比高） |
| `GEMINI_API_KEY` | Google Gemini API Key（免费额度） |
| `OPENAI_API_KEY` | OpenAI 兼容 API Key |
| `STOCK_LIST` | 自选股代码，如 `600519,300750,002594` |

完整配置见 [docs/LLM_CONFIG_GUIDE.md](docs/LLM_CONFIG_GUIDE.md) 和 [docs/full-guide.md](docs/full-guide.md)。

## 🖥️ 项目预览

| 页面 | 说明 |
|------|------|
| 首页 | 自选股工作台、今日分析、历史报告、AI 分析入口 |
| 策略问股 | 多轮对话 + 15 种内置投资策略 |
| 回测 | 策略回测与绩效分析 |
| 设置 | AI 模型配置、通知渠道、数据源管理 |

## 📁 项目结构

```
├── main.py                 # 主入口
├── server.py               # FastAPI 服务
├── api/                    # API 路由
├── src/                    # 业务逻辑
│   ├── analyzer.py         # LLM 分析引擎
│   ├── market_analyzer.py  # 大盘复盘
│   ├── agent/              # Agent 策略问股
│   └── services/           # 业务服务层
├── apps/dsa-web/           # Web 前端 (React + Vite)
├── data_provider/          # 多数据源适配
├── docs/                   # 文档
├── scripts/                # 工具脚本
└── tests/                  # 测试
```

## 📝 练习项目文档

| 文档 | 内容 |
|------|------|
| [docs/assets/dsa_vi/README.md](docs/assets/dsa_vi/README.md) | Logo 与品牌资产说明 |
| 练习1 报告 | 品牌化改造成果 |
| 练习3 报告 | 大模型配置与应用分析 |

## 📄 License

[MIT License](LICENSE) © 2026 张大鹏

> 本项目基于 [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) 二次开发，感谢原作者的贡献。

## ⚠️ 免责声明

本项目仅供学习和研究使用，不构成任何投资建议。股市有风险，投资需谨慎。
