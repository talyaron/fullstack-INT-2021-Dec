function daysOfMonth(nYear, nMonth) {
    switch (nMonth) {
        case 0 || 2 || 4 || 6 || 7 || 9 || 11: //january
            return 31;
            break;
        case 1: //february
            if ((nYear % 4) == 0 && (0 != nYear % 100) || (0 == nYear % 400)) {
                return 29;
            }
            else {
                return 28;
            }
            ;
            break;
        case 3 || 5 || 8 || 10: //april
            return 30;
            break;
        default: //months
            return console.log(daysOfMonth);
            break;
    }
}
