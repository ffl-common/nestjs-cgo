// gkc_hash_code : 01F0YZXK5XWWWVW33K81NNGFVK
export const ErrorConstant = {
  GetEntityInMessageRegex: /(\w+)Entity/g,
  GetPropertyInMessageRegex: /^Key \((.*)\)=\(.*\) already exists.$/,
  GetErrorValueInMessageRegex: /^Key \(.*\)=\((.*)\) already exists.$/,
  GraphqlVariableError: 'VariableDefinition',
  AccessDenied: 'Access Denied.',
  ErrorOnPrimaryKey: 'id',
  Type: {
    SomethingWrong: 'somethingWrong',
    UniqueViolation: 'uniqueViolation',
    WrongEmailPassword: 'wrongEmailPassword',
    Upload: 'upload',
    EntityNotFound: 'entityNotFound',
    ConfictTime: 'confictTime',
    MerchantNotBelongToVenue: 'merchantNotBelongToVenue',
    IsSlug: 'isSlug',
    InvalidToken: 'invalidToken',
    MenuItemType: 'menuItemType',
    SameOldPassword: 'sameOldPassword',
    ApplicationNotRegister: 'applicationNotRegister',
    DuplicatePhoneOrEmail: 'duplicatePhoneOrEmail',
    EmailNotVerify: 'emailNotVerify',
    ApplicationIsNotRegister: 'applicationIsNotRegister',
    AccountNotApprove: 'accountNotApprove',
    ApplicationNotComplete: 'applicationNotComplete',
    CaptchaNotValid: 'captchaNotValid',
    EmailHasVerified: 'emailHasVerified',
    BranchNotBelongToOrganization: 'branchNotBelongToOrganization',
  },
  Property: {
    RefreshToken: 'refreshToken',
    ResetPasswordToken: 'resetPasswordToken',
    Phone: 'phone',
    Email: 'email',
  },
};

export const ErrorTypesConstant = {
  // Validation error: 1000 - 1999
  isNotEmpty: {
    code: 1000,
    message: 'Please enter in the value.',
  },
  isArray: {
    code: 1001,
    message: 'Please enter the array.',
  },
  maxLength: {
    code: 1003,
    message: 'The number of valid digits has been exceeded.',
  },
  isInt: {
    code: 1005,
    message: 'Please enter the integer.',
  },
  min: {
    code: 1006,
    message: 'The input content is invalid.',
  },
  max: {
    code: 1007,
    message: 'The input content is invalid.',
  },
  isString: {
    code: 1008,
    message: 'Please enter the string.',
  },
  isBoolean: {
    code: 1009,
    message: 'Please enter the boolean.',
  },
  isDate: {
    code: 1010,
    message: 'Please enter the date.',
  },
  arraySize: {
    code: 1012,
    message: 'Please put within the size of the array.',
  },
  isNumber: {
    code: 1013,
    message: 'Please enter the number.',
  },
  isUuid: {
    code: 1014,
    message: 'Please enter by UUID.',
  },
  arrayMinSize: {
    code: 1015,
    message: 'The number of valid cases is not enough.',
  },
  arrayMaxSize: {
    code: 1016,
    message: 'The number of valid cases has been exceeded.',
  },
  uniqueViolation: {
    code: 1017,
    message: 'Do not duplicate',
  },
  isIn: {
    code: 1018,
    message: 'Illegal value.',
  },
  tokenHasExpired: {
    code: 1019,
    message: 'The token has expired.',
  },
  arrayUnique: {
    code: 1020,
    message: 'Do not duplicate.',
  },
  isPasswordConfirmation: {
    code: 1021,
    message: 'Password and Confirm Password must be the same.',
  },
  invalidToken: {
    code: 1022,
    message: 'Invalid Token.',
  },
  sameOldPassword: {
    code: 1023,
    message: 'Password and Old Password must be different.',
  },
  menuItemType: {
    code: 1024,
    message: 'Menu item type not info.',
  },

  // Other error: 2000 - 2999
  graphqlValidator: {
    code: 2000,
    message: 'Invalid information.',
  },
  entityNotFound: {
    code: 2001,
    message: 'Entity not found',
  },
  pageNotFound: {
    code: 2002,
    message: 'Page not found',
  },
  wrongEmailPassword: {
    code: 2003,
    message: 'The phone or password is incorrect.',
  },
  unauthorized: {
    code: 2004,
    message: 'An authentication error has occurred.',
  },
  upload: {
    code: 2005,
    message: 'Failed to upload photo.',
  },
  IsMaximumOrder: {
    code: 2006,
    message: 'Maximum must be greater than minimum.',
  },
  confictTime: {
    code: 2007,
    message: 'Time overlaps.',
  },
  merchantNotBelongToVenue: {
    code: 2008,
    message: 'The merchant does not belong to the organization of the venue.',
  },
  isSlug: {
    code: 2009,
    message: 'Slug must be all lowercase with dashes.',
  },
  forbidden: {
    code: 2010,
    message: 'Access is forbidden',
  },
  applicationNotRegister: {
    code: 2011,
    message: 'Can not register application information',
  },
  duplicatePhoneOrEmail: {
    code: 2012,
    message: 'Email or phone number already exists',
  },
  emailNotVerify: {
    code: 2013,
    message: 'Email not verified',
  },
  applicationIsNotRegister: {
    code: 2014,
    message: 'The account does not have application information',
  },
  accountNotApprove: {
    code: 2015,
    message: 'The account has not been approved',
  },
  applicationNotComplete: {
    code: 2016,
    message: 'Registration information has not been completed',
  },
  captchaNotValid: {
    code: 2017,
    message: 'Invalid captcha code',
  },
  emailHasVerified: {
    code: 2018,
    message: 'Email has been verified',
  },
  branchNotBelongToOrganization: {
    code: 2019,
    message: 'The branch does not belong to the organization.',
  },
  somethingWrong: {
    code: 3000,
    message: 'An error has occurred.',
  },
  internalServer: {
    code: 4000,
    message: 'INTERNAL_SERVER_ERROR',
  },
};

export const ErrorLevelsConstant = {
  High: ['isNotEmpty'],
  Medium: ['isString', 'isInt'],
};

export const DatabaseErrorCode = {
  uniqueViolation: 23505,
};

export const TableNameMappingConstant = {
  auth_access_tokens: 'AuthAccessTokenEntity',
  category_sections: 'CategorySectionEntity',
  section_menu_items: 'SectionEntityMenuItemEntity',
  categories: 'CategoryEntity',
  venues: 'VenueEntity',
};
