<template>
  <div class="login-container">
    <h2>用户登录</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL='/api'
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      axios({
        method:'post',
        url:'/user/login',
        params:{username:this.username,password:this.password}
      })
          .then(response => {
            // 处理登录成功的逻辑
            const result = response.data;
            if (result.code === 222) {
              // 登录成功，跳转至 WeChatHome 页面
              this.$router.push('/WeChatHome');
              sessionStorage.setItem("username",JSON.stringify(this.username))
            } else {
              // 处理其他情况，例如提示用户登录失败
              alert(result.message);
            }
          })
          .catch(error => {
            console.error('登录失败:', error);
            // 处理登录失败的逻辑
            alert('登录失败，请重试！');
          });
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
