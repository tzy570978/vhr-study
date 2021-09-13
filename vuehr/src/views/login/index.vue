<template>
    <div>
        <el-form>
            <div class="">
                <h3 class="">Login Form</h3>
            </div>
            <el-form>
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
