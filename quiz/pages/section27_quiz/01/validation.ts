import * as yup from 'yup'

export const schema = yup.object({
    writer: yup
    .string()
    .max(5, "이름은 5글자 이내로 입력해 주세요.")
    .required("이름을 입력해 주세요."),

    title: yup
    .string()
    .max(100, "제목은 100글자 이내로 입력해 주세요.")
    .required("제목을 입력해 주세요."),

    contents: yup
    .string()
    .max(1000, "제목은 1000글자 이내로 입력해 주세요.")
    .required("내용을 입력해 주세요."),
    
    password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,'영문 숫자포함 8자리를 입력해주세요.')
    .required("비밀번호를 입력해 주세요.")
})