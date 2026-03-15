var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getAPI_34_ttVN = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch("https://esgoo.net/api-tinhthanh-new/1/0.htm");
        if (!res.ok)
            throw new Error(" ket noi that bai");
        const result = yield res.json();
        let arrTTVN = [];
        result.data.forEach((tt) => {
            arrTTVN.push(tt.name.toLowerCase());
            arrTTVN.push(tt.name_en.toLowerCase());
        });
        return arrTTVN;
    }
    catch (error) {
        console.log("loi roi: ", error);
        return [];
    }
});
//# sourceMappingURL=getAPI-ttVN.js.map