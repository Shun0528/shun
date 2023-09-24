function myFunction() {
  // Chat Work API
  const token = "xxxxxxxxxxxxxxxxxxxxxxxxx";
  const base_url = "https://api.chatwork.com/v2";
  const room_id = "xxxxxxxxxxxxxxxxxxxxxxxxxx";
  const url = base_url + "/rooms/" + room_id + "/messages";

  // スプレットシート
  const sheet_id = "xxxxxxxxxxxxxxxxxxxxx";
  const ss = SpreadsheetApp.openById(sheet_id);
  const sheet = ss.getSheetByName("シート 1");
  const cell = sheet.getDataRange().getValues();
  const value = cell.toString();

  // TODO 確認後削除
  console.log(value);

  const options = {
    method: "post",
    headers: { "X-ChatWorkToken": token },
    payload: { body: value },
  };

  const result = UrlFetchApp.fetch(url, options);
  const json = JSON.parse(result.getContentText());

  // TODO 確認後削除
  console.log(json);
}
