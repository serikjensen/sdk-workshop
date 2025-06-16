import { http, HttpResponse, HttpResponseResolver, PathParams } from "msw";
import { setupWorker } from "msw/browser";
import type { GetV1CompaniesCompanyIdEmployeesRequest } from "@gusto/embedded-api/models/operations/getv1companiescompanyidemployees";
import type { GetV1EmployeesRequest } from "@gusto/embedded-api/models/operations/getv1employees";
import type { PostV1EmployeesRequestBody } from "@gusto/embedded-api/models/operations/postv1employees";
import type { PutV1EmployeesRequestBody } from "@gusto/embedded-api/models/operations/putv1employees";
import type {
  DeleteV1EmployeeRequest,
  DeleteV1EmployeeResponse,
} from "@gusto/embedded-api/models/operations/deletev1employee";
import type { GetV1EmployeesEmployeeIdOnboardingStatusRequest } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidonboardingstatus";
import type { PutV1EmployeesEmployeeIdOnboardingStatusRequestBody } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidonboardingstatus";
import type { GetV1EmployeesEmployeeIdJobsRequest } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidjobs";
import type { PostV1JobsJobIdRequestBody } from "@gusto/embedded-api/models/operations/postv1jobsjobid";
import type { PutV1CompensationsCompensationIdRequestBody } from "@gusto/embedded-api/models/operations/putv1compensationscompensationid";
import type { PutV1JobsJobIdRequestBody } from "@gusto/embedded-api/models/operations/putv1jobsjobid";
import type {
  DeleteV1JobsJobIdRequest,
  DeleteV1JobsJobIdResponse,
} from "@gusto/embedded-api/models/operations/deletev1jobsjobid";
import type { Employee$Outbound } from "@gusto/embedded-api/models/components/employee";
import type { EmployeeOnboardingStatus$Outbound } from "@gusto/embedded-api/models/components/employeeonboardingstatus";
import type { Job$Outbound } from "@gusto/embedded-api/models/components/job";
import type { Compensation$Outbound } from "@gusto/embedded-api/models/components/compensation";

import type { GetV1EmployeesEmployeeIdWorkAddressesRequest } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidworkaddresses";
import type { GetV1WorkAddressesWorkAddressUuidRequest } from "@gusto/embedded-api/models/operations/getv1workaddressesworkaddressuuid";
import type {
  DeleteV1WorkAddressesWorkAddressUuidRequest,
  DeleteV1WorkAddressesWorkAddressUuidResponse,
} from "@gusto/embedded-api/models/operations/deletev1workaddressesworkaddressuuid";
import type { PutV1WorkAddressesWorkAddressUuidRequestBody } from "@gusto/embedded-api/models/operations/putv1workaddressesworkaddressuuid";
import type { PostV1EmployeesEmployeeIdWorkAddressesRequestBody } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidworkaddresses";
import type { EmployeeWorkAddress$Outbound } from "@gusto/embedded-api/models/components/employeeworkaddress";
import { type PostV1CompaniesCompanyIdLocationsRequestBody } from "@gusto/embedded-api/models/operations/postv1companiescompanyidlocations";
import type { PutV1LocationsLocationIdRequestBody } from "@gusto/embedded-api/models/operations/putv1locationslocationid";
import type { Location$Outbound } from "@gusto/embedded-api/models/components/location";
import type {
  GetV1EmployeesEmployeeIdHomeAddressesRequest,
  GetV1EmployeesEmployeeIdHomeAddressesResponse,
} from "@gusto/embedded-api/models/operations/getv1employeesemployeeidhomeaddresses";
import type {
  GetV1HomeAddressesHomeAddressUuidRequest,
  GetV1HomeAddressesHomeAddressUuidResponse,
} from "@gusto/embedded-api/models/operations/getv1homeaddresseshomeaddressuuid";
import type { PostV1EmployeesEmployeeIdHomeAddressesRequestBody } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidhomeaddresses";
import type { PutV1HomeAddressesHomeAddressUuidRequestBody } from "@gusto/embedded-api/models/operations/putv1homeaddresseshomeaddressuuid";
import type {
  DeleteV1HomeAddressesHomeAddressUuidRequest,
  DeleteV1HomeAddressesHomeAddressUuidResponse,
} from "@gusto/embedded-api/models/operations/deletev1homeaddresseshomeaddressuuid";
import type { EmployeeAddress$Outbound } from "@gusto/embedded-api/models/components/employeeaddress";
import type { GetV1EmployeesEmployeeIdBankAccountsRequest } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidbankaccounts";
import type { PostV1EmployeesEmployeeIdBankAccountsRequestBody } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidbankaccounts";
import type {
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest,
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse,
} from "@gusto/embedded-api/models/operations/deletev1employeesemployeeidbankaccountsbankaccountid";
import type { GetV1EmployeesEmployeeIdPaymentMethodRequest } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidpaymentmethod";
import type { PutV1EmployeesEmployeeIdPaymentMethodRequestBody } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidpaymentmethod";
import type { EmployeeBankAccount$Outbound } from "@gusto/embedded-api/models/components/employeebankaccount";
import type { EmployeePaymentMethod$Outbound } from "@gusto/embedded-api/models/components/employeepaymentmethod";
import type { GetV1CompanyFormsRequest } from "@gusto/embedded-api/models/operations/getv1companyforms";
import type {
  GetV1CompanyFormRequest,
  GetV1CompanyFormResponse,
} from "@gusto/embedded-api/models/operations/getv1companyform";
import type { PutV1CompanyFormSignRequestBody } from "@gusto/embedded-api/models/operations/putv1companyformsign";
import type { Form$Outbound } from "@gusto/embedded-api/models/components/form";
import type { FormPdf$Outbound } from "@gusto/embedded-api/models/components/formpdf";
import type { GetV1EmployeesEmployeeIdFederalTaxesRequest } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidfederaltaxes";
import type { PutV1EmployeesEmployeeIdFederalTaxesRequestBody } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidfederaltaxes";
import type { EmployeeFederalTax$Outbound } from "@gusto/embedded-api/models/components/employeefederaltax";
import type { GetV1EmployeesEmployeeIdStateTaxesRequest } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidstatetaxes";
import type { PutV1EmployeesEmployeeIdStateTaxesRequestBody } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidstatetaxes";
import type { EmployeeStateTax$Outbound } from "@gusto/embedded-api/models/components/employeestatetax";
import type { GetV1CompaniesCompanyIdFederalTaxDetailsRequest } from "@gusto/embedded-api/models/operations/getv1companiescompanyidfederaltaxdetails";
import type { PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody } from "@gusto/embedded-api/models/operations/putv1companiescompanyidfederaltaxdetails";
import type { FederalTaxDetails$Outbound } from "@gusto/embedded-api/models/components/federaltaxdetails";
import { getFixture } from "./fixtures/getFixture";

const API_BASE_URL = "https://sdkdemo.gusto.com";

const basicForm = {
  uuid: "form-123",
  name: "Test Form",
  status: "not_signed",
  formType: "company",
  createdAt: "2024-05-29T12:00:00Z",
  updatedAt: "2024-05-29T12:30:00Z",
  requiresSigning: true,
};

export const getEmployeeStateTaxes = http.get<
  PathParams,
  GetV1EmployeesEmployeeIdStateTaxesRequest,
  EmployeeStateTax$Outbound[]
>(`${API_BASE_URL}/v1/employees/:employee_id/state_taxes`, async () => {
  const responseFixture = await getFixture(
    "get-v1-employees-employee_id-state_taxes"
  );
  return HttpResponse.json(responseFixture);
});

export const updateEmployeeStateTaxes = http.put<
  PathParams,
  PutV1EmployeesEmployeeIdStateTaxesRequestBody,
  EmployeeStateTax$Outbound[]
>(`${API_BASE_URL}/v1/employees/:employee_id/state_taxes`, async () => {
  const responseFixture = await getFixture(
    "get-v1-employees-employee_id-state_taxes"
  );
  return HttpResponse.json(responseFixture);
});

const getEmployeeFederalTaxes = http.get<
  PathParams,
  GetV1EmployeesEmployeeIdFederalTaxesRequest,
  EmployeeFederalTax$Outbound
>(`${API_BASE_URL}/v1/employees/:employee_id/federal_taxes`, async () => {
  const responseFixture = await getFixture(
    "get-v1-employees-employee_id-federal_taxes"
  );
  return HttpResponse.json(responseFixture);
});

const updateEmployeeFederalTaxes = http.put<
  PathParams,
  PutV1EmployeesEmployeeIdFederalTaxesRequestBody,
  EmployeeFederalTax$Outbound
>(`${API_BASE_URL}/v1/employees/:employee_id/federal_taxes`, async () => {
  const responseFixture = await getFixture(
    "get-v1-employees-employee_id-federal_taxes"
  );
  return HttpResponse.json(responseFixture);
});

function handleGetAllCompanyForms(
  resolver: HttpResponseResolver<
    PathParams,
    GetV1CompanyFormsRequest,
    Form$Outbound[]
  >
) {
  return http.get(`${API_BASE_URL}/v1/companies/:company_id/forms`, resolver);
}

const getEmptyEmployeeForms = http.get(
  `${API_BASE_URL}/v1/employees/:employee_id/forms`,
  () => HttpResponse.json([])
);

function handleGetCompanyForm(
  resolver: HttpResponseResolver<
    PathParams,
    GetV1CompanyFormRequest,
    Form$Outbound
  >
) {
  return http.get(`${API_BASE_URL}/v1/forms/:form_id`, resolver);
}

function handleGetCompanyFormPdf(
  resolver: HttpResponseResolver<
    PathParams,
    GetV1CompanyFormResponse,
    FormPdf$Outbound
  >
) {
  return http.get(`${API_BASE_URL}/v1/forms/:form_id/pdf`, resolver);
}

function handleSignCompanyForm(
  resolver: HttpResponseResolver<
    PathParams,
    PutV1CompanyFormSignRequestBody,
    Form$Outbound
  >
) {
  return http.put(`${API_BASE_URL}/v1/forms/:form_id/sign`, resolver);
}

const getAllCompanyForms = handleGetAllCompanyForms(() =>
  HttpResponse.json([basicForm])
);

const getCompanyForm = handleGetCompanyForm(() => HttpResponse.json(basicForm));

const getCompanyFormPdf = handleGetCompanyFormPdf(() =>
  HttpResponse.json({
    uuid: "form-123",
    document_url: "data:application/pdf;base64,JVBE",
  })
);

const signCompanyForm = handleSignCompanyForm(() =>
  HttpResponse.json(basicForm)
);

export const getEmptyEmployeeBankAccounts = http.get(
  `${API_BASE_URL}/v1/employees/:employee_id/bank_accounts`,
  () => HttpResponse.json([])
);

const getEmployeeBankAccounts = http.get<
  PathParams,
  GetV1EmployeesEmployeeIdBankAccountsRequest,
  EmployeeBankAccount$Outbound[]
>(`${API_BASE_URL}/v1/employees/:employee_id/bank_accounts`, async () => {
  const responseFixture = await getFixture(
    "get-v1-employees-employee_id-bank_accounts"
  );
  return HttpResponse.json(responseFixture);
});

const createEmployeeBankAccount = http.post<
  PathParams,
  PostV1EmployeesEmployeeIdBankAccountsRequestBody,
  EmployeeBankAccount$Outbound
>(
  `${API_BASE_URL}/v1/employees/:employee_id/bank_accounts`,
  async ({ request }) => {
    const requestBody = await request.json();
    const responseFixture = await getFixture(
      "get-v1-employees-employee_id-bank_accounts"
    );
    return HttpResponse.json({
      ...responseFixture[0],
      accountType: requestBody.accountType,
      hiddenAccountNumber: requestBody.accountNumber,
      name: requestBody.name,
      routingNumber: requestBody.routingNumber,
    });
  }
);

const deleteEmployeeBankAccount = http.delete<
  PathParams,
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest,
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse
>(
  `${API_BASE_URL}/v1/employees/:employee_id/bank_accounts/:bank_account_id`,
  () => {
    return HttpResponse.json(null, {
      status: 204,
      statusText: "Delete an employee bank account",
    });
  }
);

const getEmptyEmployeePaymentMethod = http.get(
  `${API_BASE_URL}/v1/employees/:employee_id/payment_method`,
  () =>
    HttpResponse.json({
      version: "ad88c4e3c40f122582e425030d5c2771",
      type: "Check",
    })
);

const getEmployeePaymentMethod = http.get<
  PathParams,
  GetV1EmployeesEmployeeIdPaymentMethodRequest,
  EmployeePaymentMethod$Outbound
>(`${API_BASE_URL}/v1/employees/:employee_id/payment_method`, async () => {
  const responseFixture = await getFixture(
    "get-v1-employees-employee_id-payment_method"
  );
  return HttpResponse.json(responseFixture);
});

const updateEmptyEmployeePaymentMethod = http.put(
  `${API_BASE_URL}/v1/employees/:employee_id/payment_method`,
  () =>
    HttpResponse.json({
      version: "ad88c4e3c40f122582e425030d5c2771",
      type: "Check",
    })
);

const updateEmployeePaymentMethod = http.put<
  PathParams,
  PutV1EmployeesEmployeeIdPaymentMethodRequestBody,
  EmployeePaymentMethod$Outbound
>(
  `${API_BASE_URL}/v1/employees/:employee_id/payment_method`,
  async ({ request }) => {
    const requestBody = await request.json();
    const responseFixture = await getFixture(
      "get-v1-employees-employee_id-payment_method"
    );
    return HttpResponse.json({
      ...responseFixture,
      ...requestBody,
    });
  }
);

const getEmployeeHomeAddresses = http.get<
  PathParams,
  GetV1EmployeesEmployeeIdHomeAddressesRequest,
  GetV1EmployeesEmployeeIdHomeAddressesResponse
>(`${API_BASE_URL}/v1/employees/:employee_id/home_addresses`, async () => {
  const responseFixture = await getFixture(
    "get-v1-employees-employee_id-home_addresses"
  );
  return HttpResponse.json(responseFixture);
});

const getEmployeeHomeAddress = http.get<
  PathParams,
  GetV1HomeAddressesHomeAddressUuidRequest,
  GetV1HomeAddressesHomeAddressUuidResponse
>(`${API_BASE_URL}/v1/home_addresses/:home_address_uuid`, async () => {
  const responseFixture = await getFixture(
    "get-v1-home_addresses-home_address_uuid"
  );
  return HttpResponse.json(responseFixture);
});

const createEmployeeHomeAddress = http.post<
  PathParams,
  PostV1EmployeesEmployeeIdHomeAddressesRequestBody,
  EmployeeAddress$Outbound
>(`${API_BASE_URL}/v1/employees/:employee_id/home_addresses`, async () => {
  const responseFixture = await getFixture(
    "get-v1-home_addresses-home_address_uuid"
  );
  return HttpResponse.json(responseFixture, { status: 201 });
});

const updateEmployeeHomeAddress = http.put<
  PathParams,
  PutV1HomeAddressesHomeAddressUuidRequestBody,
  EmployeeAddress$Outbound
>(`${API_BASE_URL}/v1/home_addresses/:home_address_uuid`, async () => {
  const responseFixture = await getFixture(
    "get-v1-home_addresses-home_address_uuid"
  );
  return HttpResponse.json(responseFixture);
});

const deleteEmployeeHomeAddress = http.delete<
  PathParams,
  DeleteV1HomeAddressesHomeAddressUuidRequest,
  DeleteV1HomeAddressesHomeAddressUuidResponse
>(`${API_BASE_URL}/v1/home_addresses/:home_address_uuid`, () => {
  return HttpResponse.json(null, {
    status: 204,
    statusText: "Delete an employee",
  });
});

const basicLocation = {
  uuid: "123e4567-e89b-12d3-a456-426614174000",
  version: "1.0",
  company_uuid: "789e4567-e89b-12d3-a456-426614174001",
  phone_number: "123-456-7890",
  street_1: "123 Main St",
  street_2: "Apt 101",
  city: "Anytown",
  state: "ABC",
  zip: "12345",
  country: "USA",
  active: true,
  mailing_address: true,
  filing_address: false,
  created_at: "2024-05-29T12:00:00Z",
  updated_at: "2024-05-29T12:30:00Z",
};

export const getCompanyLocation = http.get(
  `${API_BASE_URL}/v1/companies/:company_id/locations`,
  () => HttpResponse.json([basicLocation])
);

export const getCompanyLocations = http.get(
  `${API_BASE_URL}/v1/companies/:company_id/locations`,
  () => HttpResponse.json([basicLocation])
);

export const getEmptyCompanyLocations = http.get(
  `${API_BASE_URL}/v1/companies/:company_id/locations`,
  () => HttpResponse.json([])
);

export const getMinimumWages = http.get(
  `${API_BASE_URL}/v1/locations/:location_uuid/minimum_wages`,
  async () => {
    const responseFixture = await getFixture(
      "get-v1-locations-location_uuid-minimum_wages"
    );
    return HttpResponse.json(responseFixture);
  }
);

export const createCompanyLocation = http.post<
  PathParams,
  PostV1CompaniesCompanyIdLocationsRequestBody,
  Location$Outbound
>(`${API_BASE_URL}/v1/companies/:company_id/locations`, async ({ request }) => {
  const requestBody = await request.json();
  return HttpResponse.json({
    uuid: "location_uuid",
    version: "1.0",
    company_uuid: "789e4567-e89b-12d3-a456-426614174001",
    phone_number: requestBody.phoneNumber,
    street_1: requestBody.street1,
    street_2: requestBody.street2,
    city: requestBody.city,
    state: requestBody.state,
    zip: requestBody.zip,
    country: "USA",
    active: true,
    mailing_address: requestBody.mailingAddress,
    filing_address: requestBody.filingAddress,
    created_at: "2024-05-29T12:00:00Z",
    updated_at: "2024-05-29T12:30:00Z",
  });
});

const updateCompanyLocation = http.put<
  PathParams,
  PutV1LocationsLocationIdRequestBody,
  Location$Outbound
>(`${API_BASE_URL}/v1/locations/:location_id`, async ({ request }) => {
  const requestBody = await request.json();
  return HttpResponse.json({
    uuid: "location_uuid",
    version: "1.0",
    company_uuid: "789e4567-e89b-12d3-a456-426614174001",
    phone_number: requestBody.phoneNumber,
    street_1: requestBody.street1,
    street_2: requestBody.street2,
    city: requestBody.city,
    state: requestBody.state,
    zip: requestBody.zip,
    country: "USA",
    active: true,
    mailing_address: requestBody.mailingAddress,
    filing_address: requestBody.filingAddress,
    created_at: "2024-05-29T12:00:00Z",
    updated_at: "2024-05-29T12:30:00Z",
  });
});

export const getEmployeeWorkAddresses = http.get<
  PathParams,
  GetV1EmployeesEmployeeIdWorkAddressesRequest,
  EmployeeWorkAddress$Outbound[]
>(`${API_BASE_URL}/v1/employees/:employee_id/work_addresses`, async () => {
  const responseFixture = await getFixture(
    "get-v1-employees-employee_id-work_addresses"
  );
  return HttpResponse.json(responseFixture);
});

export const getEmployeeWorkAddress = http.get<
  PathParams,
  GetV1WorkAddressesWorkAddressUuidRequest,
  EmployeeWorkAddress$Outbound
>(`${API_BASE_URL}/v1/work_addresses/:work_address_uuid`, async () => {
  const responseFixture = await getFixture(
    "get-v1-work_addresses-work_address_uuid"
  );
  return HttpResponse.json(responseFixture);
});

export const createEmployeeWorkAddress = http.post<
  PathParams,
  PostV1EmployeesEmployeeIdWorkAddressesRequestBody,
  EmployeeWorkAddress$Outbound
>(`${API_BASE_URL}/v1/employees/:employee_id/work_addresses`, async () => {
  const responseFixture = await getFixture(
    "get-v1-work_addresses-work_address_uuid"
  );
  return HttpResponse.json(responseFixture, { status: 201 });
});

export const updateEmployeeWorkAddress = http.put<
  PathParams,
  PutV1WorkAddressesWorkAddressUuidRequestBody,
  EmployeeWorkAddress$Outbound
>(`${API_BASE_URL}/v1/work_addresses/:work_address_uuid`, async () => {
  const responseFixture = await getFixture(
    "get-v1-work_addresses-work_address_uuid"
  );
  return HttpResponse.json(responseFixture);
});

export const deleteEmployeeWorkAddress = http.delete<
  PathParams<"delete-v1-work_addresses-work_address_uuid">,
  DeleteV1WorkAddressesWorkAddressUuidRequest,
  DeleteV1WorkAddressesWorkAddressUuidResponse
>(`${API_BASE_URL}/v1/work_addresses/:work_address_uuid`, () => {
  return HttpResponse.json(null, {
    status: 204,
    statusText: "Delete an employee work address",
  });
});

export const getCompany = http.get(
  `${API_BASE_URL}/v1/companies/:company_id`,
  ({ params }) => {
    return HttpResponse.json({
      uuid: params.company_id,
    });
  }
);

export function handleGetCompanyEmployees(
  resolver: HttpResponseResolver<
    PathParams,
    GetV1CompaniesCompanyIdEmployeesRequest,
    Employee$Outbound[]
  >,
  companyId = "demo"
) {
  return http.get(
    `${API_BASE_URL}/v1/companies/${companyId}/employees`,
    resolver
  );
}

export const getCompanyEmployees = (companyId?: string) =>
  handleGetCompanyEmployees(
    () =>
      HttpResponse.json([
        {
          first_name: "Dmitriy",
          last_name: "Demo",
          uuid: "1",
          onboarding_status: "admin_onboarding_incomplete",
          payment_method: "Direct Deposit",
        },
        {
          first_name: "Kim",
          last_name: "Demofakename",
          uuid: "3",
          onboarding_status: "onboarding_completed",
          payment_method: "Direct Deposit",
          onboarded: true,
        },
        {
          first_name: "Leah",
          last_name: "Notrealname",
          uuid: "4",
          onboarding_status: "onboarding_completed",
          payment_method: "Direct Deposit",
          onboarded: true,
        },
        {
          first_name: "Charlie",
          last_name: "Notrealname",
          uuid: "40s",
          onboarding_status: "onboarding_completed",
          payment_method: "Direct Deposit",
          onboarded: true,
        },
        {
          first_name: "Sean",
          last_name: "Pseudonym",
          uuid: "5",
          onboarding_status: "onboarding_completed",
          payment_method: "Direct Deposit",
          onboarded: true,
        },
        {
          first_name: "Aaron",
          last_name: "Alias",
          uuid: "6",
          onboarding_status: "onboarding_completed",
          payment_method: "Direct Deposit",
          onboarded: true,
        },
        {
          first_name: "Steve",
          last_name: "Supercoolfakename",
          uuid: "7",
          onboarding_status: "onboarding_completed",
          payment_method: "Direct Deposit",
          onboarded: true,
        },
        {
          first_name: "Jeffrey",
          last_name: "Demoname",
          uuid: "8",
          onboarding_status: "onboarding_completed",
          payment_method: "Direct Deposit",
          onboarded: true,
        },
      ]),
    companyId
  );

export const getEmployee = http.get<
  PathParams,
  GetV1EmployeesRequest,
  Employee$Outbound
>(`${API_BASE_URL}/v1/employees/:employee_id`, () => {
  // Since we don't have fixtures available yet, return a mock response
  return HttpResponse.json({
    uuid: ":employee_id",
    company_uuid: "a007e1ab-3595-43c2-ab4b-af7a5af2e365",
    first_name: "Employee",
    last_name: "Name",
    onboarding_status: "onboarding_completed",
    payment_method: "Direct Deposit",
  });
});

export const createEmployee = http.post<
  PathParams,
  PostV1EmployeesRequestBody,
  Employee$Outbound
>(`${API_BASE_URL}/v1/companies/:company_id/employees`, async ({ request }) => {
  const requestBody = await request.json();
  return HttpResponse.json(
    {
      uuid: "new-employee-uuid",
      first_name: requestBody.firstName || "New",
      last_name: requestBody.lastName || "Employee",
      onboarding_status: "admin_onboarding_incomplete",
      payment_method: "Direct Deposit",
    },
    { status: 201 }
  );
});

export const updateEmployee = http.put<
  PathParams,
  PutV1EmployeesRequestBody,
  Employee$Outbound
>(`${API_BASE_URL}/v1/employees/:employee_id`, async ({ request, params }) => {
  const requestBody = await request.json();
  const employeeId = params.employee_id as string;

  // Assuming the API expects snake_case, but the incoming request uses camelCase
  return HttpResponse.json({
    uuid: employeeId,
    first_name: requestBody.firstName || "Updated",
    last_name: requestBody.lastName || "Employee",
    payment_method: "Direct Deposit",
    onboarding_status: "onboarding_completed",
  });
});

export const deleteEmployee = http.delete<
  PathParams,
  DeleteV1EmployeeRequest,
  DeleteV1EmployeeResponse
>(`${API_BASE_URL}/v1/employees/:employee_id`, () => {
  return HttpResponse.json(null, { status: 204 });
});

export const getEmployeeOnboardingStatus = http.get<
  PathParams,
  GetV1EmployeesEmployeeIdOnboardingStatusRequest,
  EmployeeOnboardingStatus$Outbound
>(`${API_BASE_URL}/v1/employees/:employee_id/onboarding_status`, () => {
  return HttpResponse.json({
    uuid: "onboarding-status-uuid",
    onboarding_status: "onboarding_completed",
  });
});

export const updateEmployeeOnboardingStatus = http.put<
  PathParams,
  PutV1EmployeesEmployeeIdOnboardingStatusRequestBody,
  EmployeeOnboardingStatus$Outbound
>(
  `${API_BASE_URL}/v1/employees/:employee_id/onboarding_status`,
  async ({ request }) => {
    const requestBody = await request.json();
    return HttpResponse.json({
      uuid: "onboarding-status-uuid",
      onboarding_status: requestBody.onboardingStatus || "onboarding_completed",
    });
  }
);

export function handleGetEmployeeJobs(
  resolver: HttpResponseResolver<
    PathParams,
    GetV1EmployeesEmployeeIdJobsRequest,
    Job$Outbound[]
  >
) {
  return http.get(`${API_BASE_URL}/v1/employees/:employee_id/jobs`, resolver);
}

export const getEmployeeJobs = handleGetEmployeeJobs(() => {
  return HttpResponse.json([
    {
      uuid: "job-uuid-1",
      title: "Software Engineer",
      hire_date: "2023-01-01",
      two_percent_shareholder: false,
      state_wc_covered: true,
      state_wc_class_code: "1234",
    },
  ]);
});

export function handleCreateEmployeeJob(
  resolver: HttpResponseResolver<
    PathParams,
    PostV1JobsJobIdRequestBody,
    Job$Outbound
  >
) {
  return http.post(`${API_BASE_URL}/v1/employees/:employee_id/jobs`, resolver);
}

export const createEmployeeJob = handleCreateEmployeeJob(
  async ({ request }) => {
    const requestBody = await request.json();
    return HttpResponse.json({
      uuid: "job-uuid",
      title: requestBody.title,
      hire_date: requestBody.hireDate,
      two_percent_shareholder: requestBody.twoPercentShareholder,
      state_wc_covered: requestBody.stateWcCovered,
      state_wc_class_code: requestBody.stateWcClassCode,
    });
  }
);

export function handleUpdateEmployeeCompensation(
  resolver: HttpResponseResolver<
    PathParams,
    PutV1CompensationsCompensationIdRequestBody,
    Compensation$Outbound
  >
) {
  return http.put(
    `${API_BASE_URL}/v1/compensations/:compensation_id`,
    resolver
  );
}

export const updateEmployeeCompensation = handleUpdateEmployeeCompensation(
  async ({ request }) => {
    const requestBody = await request.json();
    return HttpResponse.json({
      ...requestBody,
      uuid: "1234",
      job_uuid: "job-uuid",
    });
  }
);

export function handleUpdateEmployeeJob(
  resolver: HttpResponseResolver<
    PathParams,
    PutV1JobsJobIdRequestBody,
    Job$Outbound
  >
) {
  return http.put(`${API_BASE_URL}/v1/jobs/:job_id`, resolver);
}

export const updateEmployeeJob = handleUpdateEmployeeJob(
  async ({ request }) => {
    const requestBody = await request.json();
    return HttpResponse.json({
      ...requestBody,
      uuid: "job-uuid",
      title: requestBody.title || "My Job",
    });
  }
);

export function handleDeleteEmployeeJob(
  resolver: HttpResponseResolver<
    PathParams,
    DeleteV1JobsJobIdRequest,
    DeleteV1JobsJobIdResponse
  >
) {
  return http.delete(`${API_BASE_URL}/v1/jobs/:job_id`, resolver);
}

export const deleteEmployeeJob = handleDeleteEmployeeJob(() => {
  return HttpResponse.json(null, { status: 204 });
});

export const getEmployeeGarnishments = http.get(
  `${API_BASE_URL}/v1/employees/:employee_id/garnishments`,
  () => HttpResponse.json([])
);

export function handleGetCompanyFederalTaxes(
  resolver: HttpResponseResolver<
    PathParams,
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest,
    FederalTaxDetails$Outbound
  >
) {
  return http.get(
    `${API_BASE_URL}/v1/companies/:company_id/federal_tax_details`,
    resolver
  );
}

export const getCompanyFederalTaxes = handleGetCompanyFederalTaxes(async () => {
  const responseFixture = await getFixture(
    "get-v1-companies-company_id-federal_tax_details"
  );
  return HttpResponse.json(responseFixture);
});

export function handleUpdateCompanyFederalTaxes(
  resolver: HttpResponseResolver<
    PathParams,
    PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody,
    FederalTaxDetails$Outbound
  >
) {
  return http.put(
    `${API_BASE_URL}/v1/companies/:company_id/federal_tax_details`,
    resolver
  );
}

export const updateCompanyFederalTaxes = handleUpdateCompanyFederalTaxes(
  async (overrides: object | undefined) => {
    const responseFixture = await getFixture(
      "get-v1-companies-company_id-federal_tax_details"
    );
    return HttpResponse.json({ ...responseFixture, ...overrides });
  }
);

export const mockHandlers = [
  getCompanyEmployees(),
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeJobs,
  createEmployeeJob,
  updateEmployeeCompensation,
  updateEmployeeJob,
  deleteEmployeeJob,
  getEmployeeOnboardingStatus,
  updateEmployeeOnboardingStatus,
  getEmployeeGarnishments,
  getCompany,
  getEmployeeWorkAddresses,
  getEmployeeWorkAddress,
  createEmployeeWorkAddress,
  updateEmployeeWorkAddress,
  deleteEmployeeWorkAddress,
  getCompanyLocation,
  getCompanyLocations,
  createCompanyLocation,
  updateCompanyLocation,
  getEmployeeHomeAddresses,
  getEmployeeHomeAddress,
  createEmployeeHomeAddress,
  updateEmployeeHomeAddress,
  deleteEmployeeHomeAddress,
  getMinimumWages,
  getEmployeeBankAccounts,
  createEmployeeBankAccount,
  deleteEmployeeBankAccount,
  getEmployeePaymentMethod,
  updateEmployeePaymentMethod,
  getAllCompanyForms,
  getEmptyEmployeeForms,
  getCompanyForm,
  getCompanyFormPdf,
  signCompanyForm,
  getEmployeeFederalTaxes,
  updateEmployeeFederalTaxes,
  getEmployeePaymentMethod,
  updateEmployeePaymentMethod,
  getEmptyEmployeePaymentMethod,
  updateEmptyEmployeePaymentMethod,
  getEmployeeStateTaxes,
  updateEmployeeStateTaxes,
  getCompanyFederalTaxes,
  updateCompanyFederalTaxes,
];

export const worker = setupWorker(...mockHandlers);
