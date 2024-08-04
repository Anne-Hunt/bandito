import { Account } from "~~/server/models/account.js";

export default defineEventHandler(async (event) => {
    const account = await Account.find();

    return Account;
});
