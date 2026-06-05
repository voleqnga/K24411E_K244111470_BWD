function thuchienpheptoan(a,b,pt)
{
    kq=""
    switch(pt)
    {
<<<<<<< HEAD
        case "+":
            kq= (a + b)
            break
        case "-":
            kq= (a - b)
            break
        case "*":
            kq= (a * b)
            break
        case "/":
            kq= (a / b)
            break
        default:
            kq="Lỗi phép toán"
    }
    return kq;
}
=======
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
>>>>>>> 4c85026f0fb7309d222166cd61e3d8c8cc039ccf
