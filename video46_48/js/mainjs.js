function thuchienpheptoan(a,b,pt)
{
    kq=""
    switch(pt)
    {
        case "cong":
            return (a + b);
            break
        case "tru":
            return (a - b);
            break
        case "nhan":
            return (a * b);
            break
        case "chia":
            return (a / b);
            break
        default:
            kq="Lỗi phép toán"
            break
    }
    return kq
}
