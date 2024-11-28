import Db from "../db/db";
import MyData from "../models/myData";
import * as Response from "../helpers/response/response";
class PersonalData {
    static async addData(req, res) {
        const PersonalInfo = { ...req.body };
        try {
            const Information = await Db.addPesornalData(MyData, PersonalInfo);
            return Response.responseOkCreated(res, Information);
        }
        catch (error) {
            return Response.responseServerError(res);
        }
    }
    static async allData(req, res) {
        try {
            const allData = await Db.getAllData(MyData);
            return Response.responseOk(res, allData);
        }
        catch (error) {
            return Response.responseNotFound(res);
        }
    }
}
export default PersonalData;
