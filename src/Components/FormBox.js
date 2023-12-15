import { useState } from "react";

const FormBox = ({ updateMainCat }) => {
    // 한글 체크
    const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");
    const [hide, setHide] = useState({ display: "inline-block" });

    // input 변경값 감지
    const handleTextSubmit = (e) => {
        const userValue = e.target.value;
        // 대문자 변환
        setValue(userValue.toUpperCase());

        // 한글 체크
        setMessage("");
        setHide({ display: "inline-block" })
        if (includesHangul(userValue)) {
            setMessage("영어만 입력이 가능합니다");
            setHide({ display: "none" });
        }
    }

    // 생성 스크립트
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (value === "") {
            setMessage("빈 값으로 생성은 불가능합니다 🥲");
            return;
        }
        updateMainCat(value);
    }

    return (
        <div className="formBox">
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="영어 대사를 입력해주세요" value={value} onChange={handleTextSubmit} />
                <button type="submit" style={hide}>생성</button>
                <p className="alertInfo" style={{ color: "red" }}>{message}</p>
            </form>
        </div>
    );
}

export default FormBox;