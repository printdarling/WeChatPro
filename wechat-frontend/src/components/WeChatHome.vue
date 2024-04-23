<template>
  <div class="wechat-home">
    <!-- 头部 -->
    <el-header class="header">微信</el-header>

    <!-- 中间主要内容 -->
    <el-main class="main">
      <div class="conversation-list">
        <!-- 好友列表 -->
        <div class="friend-container">
          <div class="friend" v-for="(friend, index) in friends" :key="index">
            <div class="avatar"></div>
            <div class="info">
              <p class="name">{{ friend.name }}</p>
              <p class="message">{{ friend.lastMessage }}</p>
              <p class="time">{{ friend.lastTime }}</p>
            </div>
          </div>
        </div>
      </div>
    </el-main>

    <!-- 底部导航栏 -->
    <el-footer class="footer">
      <div class="nav">
        <div class="nav-item">
          <el-icon size="20"><ChatRound /></el-icon>
          <span class="text">微信</span>
        </div>
        <div class="nav-item">
          <el-icon size="20"><UserFilled /></el-icon>
          <span class="text">通讯录</span>
        </div>
        <div class="nav-item">
          <el-icon size="20"><Position /></el-icon>
          <span class="text">发现</span>
        </div>
        <div class="nav-item">
          <el-icon size="20"><User /></el-icon>
          <span class="text">我</span>
        </div>
      </div>
    </el-footer>

  </div>
</template>

<script>
import {ChatRound, Position, User, UserFilled, ZoomIn} from "@element-plus/icons-vue";
import axios from "axios";

export default {
  name: 'WeChatHome',
  components: {Position, ZoomIn, User, UserFilled, ChatRound},
  data() {
    return {
      friends: [
        { name: '好友1', lastMessage: '最新消息内容1...', lastTime: '10:00' },
        { name: '好友2', lastMessage: '最新消息内容2...', lastTime: '11:30' },
        { name: '好友3', lastMessage: '最新消息内容3...', lastTime: '12:45' },
        // 可以根据需要添加更多模拟数据
      ],
      isOnline: true,
    };
  },
  created() {
    this.init();
  },
  methods:{
    async init() {

        this.username = sessionStorage.getItem("username")


      //创建webSocket对象
     let ws = new WebSocket("ws://localhost/chat");

      //给ws绑定事件
      ws.onopen = this.onopen;
      //接收到服务端推送的消息后触发
      ws.onmessage = this.onMessage;

      ws.onclose = this.onClose;
    },
    onOpen() {
      this.isOnline = true;
    },
    onClose() {
      this.isOnline = false;
    },
  }
};
</script>

<style scoped>
.wechat-home {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-color: #07c160;
  color: #fff;
  flex: 0 0 auto;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* 确保头部在最上层 */
}

.main {
  flex: 1;
  overflow-y: auto;
  background-color: #f2f2f2;
  padding-top: 60px; /* 考虑头部高度，避免内容被头部遮挡 */
  padding-bottom: 50px; /* 考虑底部导航栏高度，避免内容被底部导航栏遮挡 */
}

.footer {
  background-color: #f0f0f0;
  flex: 0 0 auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000; /* 确保底部导航栏在最上层 */
}

.conversation-list {
  padding: 10px;
}

.friend-container {
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 10px;
}

.friend {
  display: flex;
  padding: 10px;
}

.avatar {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 10px;
}

.info {
  flex-grow: 1;
}

.name {
  font-weight: bold;
}

.message {
  margin-top: 5px;
  color: #666;
}

.time {
  margin-top: 5px;
  color: #999;
  text-align: right;
}

.nav {
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
}

.nav-item {
  flex: 1;
  text-align: center;
}

@media (max-width: 768px) {
  .wechat-home {
    overflow-x: hidden;
  }
}


</style>
