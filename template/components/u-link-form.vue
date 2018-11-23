<template>
    <div class="u-link-form">
        <ul class="u-form">
            <li class="form-item">
                <label>技术</label>
                <u-select :list="list" labelField="label" valueField="value" v-model="modal.technology" size="xxl"/>
            </li>
            <li class="form-item">
                <label>公司/单位</label>
                <u-input v-model="modal.company" size="l" placeholder="请输入您公司/单位名称（必填)"/>
                <p id="company" class="u-validator"></p>
            </li>
            <li class="form-item">
                <label>姓名</label>
                <u-input v-model="modal.name" size="l" placeholder="请输入您的姓名"/>
                <p id="name" class="u-validator"></p>
            </li>
            <li class="form-item">
                <label>电话</label>
                <u-input v-model="modal.phone" size="l" placeholder="便于我们快速联系您"/>
            </li>
            <li class="form-item">
                <label>邮箱</label>
                <u-input v-model="modal.mail" size="l" placeholder="便于我们快速联系您"/>
            </li>
            <li class="form-item">
                <label class="top">需求描述</label>
                <u-input v-model="modal.specifications" type="textarea" size="l" placeholder="告诉我们您对AI的需求，我们会安排专业人士与您沟通"/>
            </li>
        </ul>

        <u-button size='m' color='primary' @click="submit">提交信息</u-button>
    </div>
</template>

<script>
import { sendEmail } from '~/server/api.js'

export default {
    data() {
        return {
            list: [
                {
                    label: 'ceshi',
                    value: 'ceshi'
                },
                {
                    label: 'ceshi',
                    value: 'ceshi'
                },
                {
                    label: 'ceshi',
                    value: 'ceshi'
                }
            ],
            modal: {
                technology: '',
                company: '',
                name: '',
                phone: '',
                mail: '',
                specifications: ''
            }
        }
    },
    mounted() {
        // test
        if (false) {
            this.modal = {
                company: '测试',
                name: '测试',
                phone: '18512371231',
                mail: '82374824@qq.com',
                specifications: '测试'
            }
        }
    },
    methods: {
        async submit() {
            let result = await sendEmail(this.modal)
            result['status'] && this.$emit('submitSuccess')
        }
    }
}
</script>

<style lang="scss" scoped>
.u-link-form {
    text-align: center;

    .form-item {
        position: relative;
        margin-top: 30px;

        &:first-child {
            margin-top: 0;
        }

        label {
            display: inline-block;
            width: 70px;
            text-align: left;

            &.top {
                position: relative;
                top: -50px;
            }
        }

        .u-validator {
            position: absolute;
            left: 208px;
            top: 41px;
            display: none;
            color: #f62626;
            font-size: 12px;

            &.show {
                display: block;
            }
        }

        .select {
            width: 194px;
            height: 36px;
            border-radius: 2px;
        }
    }

    .u-button {
        margin: 40px 0 60px;
    }
}
</style>
