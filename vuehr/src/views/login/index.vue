<template>
    <div>
        <el-form>
            <div>
                <h3>Login Form</h3>
            </div>
            <el-form>
                <span>
                    <svg-icon icon-class="user"/>
                </span>
                <span>
                    <svg-icon icon-class="user4553"/>
                </span>
                <el-input></el-input>
            </el-form>
        </el-form>
    </div>

</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: '111111'
                },
            }
        }
    }
</script>

<style scoped>

</style>
