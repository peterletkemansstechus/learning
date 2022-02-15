const Person = require('./person');

describe("Person", () => {
    const person = new Person();
    test('make sure Hello is displayed', () => {
      const setPersonSpy = jest.spyOn(person,'hello');
      const result = person.hello();
      expect(setPersonSpy).toBeCalled();
      expect(result).toBe('hello how are you');
      expect(result).not.toBe('good-bye');
    });

    test('make sure good bye is not displayed', () => {
      const setPersonSpy = jest.spyOn(person,'hello');
      const result = person.hello();
      expect(result).not.toBe('good-bye');
    });



    test('goingInCircles', () => {
      const setPersonSpy1 = jest.spyOn(person,'goingInCircles');
      const result = person.goingInCircles();
      expect(setPersonSpy1).toBeCalled();
      expect(result).toBe('firstName lastName stepped left.\nfirstName lastName stepped right.\nfirstName lastName stepped forward.\nfirstName lastName stepped backward.\n');
      expect(result).not.toBe('test');

      leftPostion = person.leftPostion;
      backwardPosition = person.backwardPosition;
      forwardPosition = person.forwardPosition;
      rightPosition = person.rightPosition;

      expect(leftPostion).toBe(2);
      expect(backwardPosition).toBe(3);
      expect(forwardPosition).toBe(4);
      expect(rightPosition).toBe(5);
    });
});