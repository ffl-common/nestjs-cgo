// gkc_hash_code : 01F0YZXK5XWWWVW33K81NNGFVK
import 'dotenv/config';

export const AppConstant = {
  secret_key_access_token: 'aeedf5f652c2a1a11a9f5026df269515',
  secret_key_refresh_token: 'segaetadhsaw347d8hdgs2ftw5gs689fg',
  DefaultCode: '#88',
  GetNumberFromIndex3Regex: '(?<=.{3})\\d+',
  AccessTokenExpiresIn: '60m',
  RefreshTokenExpiresIn: 604800,
  ImageNameByte: 20,
  FileExtensionRegex: /\.[0-9a-z]+$/i,
  ImageRegex: /\/(jpg|jpeg|png)$/i,
  TokenByteSize: 64,
  EncodingFormat: {
    Hex: 'hex',
  },
  ExpriresTimeUnit: 'second',
  GraphqlEndpoint: '/api/v1/graphql',
  AuthHeader: 'x-authorization',
  Authorization: 'authorization',
  XaccessToken: 'x-access-token',
  HourTimeRegex: /^(0\d|1\d|2[0-3]):[0-5]\d$/,
  TimeFormatWithSecond: 'HH:mm:ss',
  UrlSlugRegex: /^[a-z0-9\-]+$/,
  RetrySendMail: 3,
  EmailRegex:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ResetPasswordTokenExpiresIn: 259200,
  ConfirmEmailTokenExpiresIn: 259200,
};
