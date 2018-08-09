<template>
    <div class="g-footer">
        <div class="f-content layout">
            <u-icon name="logo" scale="0.3" href="https://ai.163.com/" />
            <div class="linkus">
                <h3>联系我们</h3>
                <p>18587878787 王先生</p>
                <p>official-website@service.com</p>
                <p>杭州市滨江区测试测试文字测试文字</p>
            </div>
        </div>
        <div class="f-bottom">\{{copyright}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            copyright: `©1997-${new Date().getFullYear()} XX公司版权所有`
        }
    }
}
</script>

<style lang="scss" scoped>
.g-footer {
    background-color: $black;
    text-align: center;

    .f-content {
        padding: 55px 0 30px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        .linkus {
            display: inline-block;
            margin-left: 30px;
            padding-left: 30px;
            border-left: 1px solid rgba(255, 255, 255, 0.3);
            text-align: left;

            h3 {
                font-size: 20px;
                margin-bottom: 10px;
            }

            p {
                font-size: 14px;
                color: #a1a1a1;
            }
        }
    }

    .f-bottom {
        height: 60px;
        line-height: 60px;
    }
}
</style>
