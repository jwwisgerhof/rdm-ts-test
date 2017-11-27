interface ApiInterface {
  updateUser(): Promise<boolean>;
}

class Api implements ApiInterface {
  updateUser() {
    return new Promise<boolean>(resolve => {
      resolve(true);
    });
  }
}

class SomeOtherClass {
  private api: ApiInterface;

  constructor(api: ApiInterface) {
    this.api = api;
  }

  doSomethingWithUser() {
    return this.api.updateUser();
  }
}

/////////////// TESTS

// Will normally be in a subdir __mocks__
class ApiTest implements ApiInterface {
  updateUser = jest.fn();
}

let api: ApiTest;
let someOtherClass: SomeOtherClass;

describe("SomeOtherClass tests", () => {
  beforeEach(() => {
    api = new ApiTest();
    someOtherClass = new SomeOtherClass(api);
  });

  test("should pass the update call on to the api", () => {
    api.updateUser.mockReturnValueOnce("abc");
    expect(someOtherClass.doSomethingWithUser()).resolves.toBe("abc");
  });
});
