<div align="center">

# 📈 如意金股 RuyiDailyStockAnalysis

> 🤖 基于 AI 大模型的 A股/港股/美股自选股智能分析系统
> 每日自动分析并推送决策仪表盘到企业微信/飞书/Telegram/Discord/Slack/邮箱

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Ready-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)

**作者：林姗姗**

[产品预览](#-产品预览) · [功能特性](#-功能特性) · [快速开始](#-快速开始) · [从源码学习](#-从源码学习)

</div>

---

## 🖥️ 产品预览

Web 工作台提供 AI 分析、任务监控、历史报告、Agent 问股、回测、持仓管理和浅色/深色主题。

| 页面 | 说明 |
|------|------|
| **工作台** | 自选股列表、今日分析、快速分析入口、大盘复盘 |
| **策略问股** | 多轮对话，支持 15 种内置投资策略 |
| **回测** | 策略回测与绩效分析 |
| **设置** | AI 模型配置、通知渠道、数据源管理 |

## ✨ 功能特性

| 能力 | 说明 |
|------|------|
| AI 决策报告 | 核心结论、评分、趋势、买卖点位、风险警报、催化因素、操作检查清单 |
| 多市场数据聚合 | A股、港股、美股、日股、韩股、台股及 ETF |
| Agent 策略问股 | 均线金叉、缠论、波浪、多头趋势、热点题材、事件驱动、成长质量、预期重估等 15+ 内置策略 |
| 智能导入与补全 | 图片、CSV/Excel、剪贴板导入；股票代码/名称/拼音/别名补全 |
| 自动化推送 | GitHub Actions、Docker、本地定时、企业微信/飞书/Telegram/Discord/Slack/邮件 |

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

# 浏览器打开 http://127.0.0.1:8000
```

### 配置 LLM（至少一项）

| 环境变量 | 说明 |
|----------|------|
| `DEEPSEEK_API_KEY` | DeepSeek API Key（推荐，性价比高） |
| `GEMINI_API_KEY` | Google Gemini API Key（免费额度） |
| `OPENAI_API_KEY` + `OPENAI_BASE_URL` | 任意 OpenAI 兼容服务 |
| `ANTHROPIC_API_KEY` | Claude API Key |
| `SILICONFLOW_API_KEY` | 硅基流动 API Key |
| `STOCK_LIST` | 自选股，如 `600519,300750,002594` |

> 完整配置见 [docs/LLM_CONFIG_GUIDE.md](docs/LLM_CONFIG_GUIDE.md) 和 [docs/full-guide.md](docs/full-guide.md)

## 🏗️ 从源码学习

本仓库适合以下学习路径：

| 主题 | 源码位置 | 说明 |
|------|----------|------|
| LLM 调用链 | `src/analyzer.py` | GeminiAnalyzer → LiteLLM → 多渠道 fallback |
| 数据源体系 | `data_provider/` | 7 数据源优先级 + fallback |
| Agent 问股 | `src/agent/` | ReAct 循环 + 工具调用 + 15 种策略 |
| Web 前端 | `apps/dsa-web/` | React + Vite + Tailwind |
| Web 服务 | `api/app.py` + `server.py` | FastAPI 后端 |

## 📁 目录结构

```
├── main.py              # 主入口
├── server.py            # FastAPI 服务
├── api/                 # API 路由
├── src/                 # 业务逻辑
│   ├── analyzer.py      # LLM 分析引擎
│   ├── agent/           # Agent 策略问股
│   └── services/        # 业务服务层
├── apps/dsa-web/        # Web 前端 (React + Vite)
├── data_provider/       # 多数据源适配
├── docs/                # 文档
├── scripts/             # 工具脚本
├── tests/               # 测试
└── examples/            # 学习示例
```

## 📜 License

[MIT License](LICENSE) © 2026 张大鹏

> 本仓库基于 [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) 二次开发，感谢原作者。

## ⚠️ 免责声明

本项目仅供学习和研究使用，不构成任何投资建议。股市有风险，投资需谨慎。
