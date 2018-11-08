export class UploadPolicy {
  scope: string;
  deadline: number;
  saveKey?: string;
  fsizeLimit: number;
  overwrite: number;
  returnUrl: string | undefined;
  returnBody: string | undefined;
  callbackUrl?: string;
  callbackBody?: string;
  persistentNotifyUrl?: string;
  persistentOps?: string;
  contentDetect?: string;
  detectNotifyURL?: string;
  detectNotifyRule?: string;
  separate?: number;

  constructor(
    bucket: string,
    tokenExpiredAt: number,
    fileKey?: string,
    saveKey?: string,
    fsizeLimit: number = 0,
    overwrite: number = 0,
    returnUrl?: string,
    returnBody?: string,
    callbackUrl?: string,
    callbackBody?: string,
    processNotifyUrl?: string,
    processOps?: string,
    contentDetect?: string,
    detectNotifyURL?: string,
    detectNotifyRule?: string,
    processSeparateNotify: number = 0
  ) {
    if (!fileKey) {
      this.scope = bucket;
    } else {
      this.scope = `${bucket}:${fileKey}`;
    }
    console.log(this.scope);
    this.deadline = tokenExpiredAt;
    if (saveKey) this.saveKey = saveKey;
    this.fsizeLimit = fsizeLimit;
    this.overwrite = overwrite;
    this.returnUrl = returnUrl;
    this.returnBody = returnBody;
    if (callbackUrl) this.callbackUrl = callbackUrl;
    if (callbackBody) this.callbackBody = callbackBody;
    if (processNotifyUrl) this.persistentNotifyUrl = processNotifyUrl;
    if (processOps) this.persistentOps = processOps;
    if (contentDetect) this.contentDetect = contentDetect;
    if (detectNotifyURL) this.detectNotifyURL = detectNotifyURL;
    if (detectNotifyRule) this.detectNotifyRule = detectNotifyRule;
    if (processSeparateNotify) this.separate = processSeparateNotify;
  }
}
