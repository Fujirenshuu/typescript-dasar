import {sayHello} from "../src/say-hello";

describe('sayHello', function() {
    it('should return hello fuji', function() {
      expect(sayHello("fuji")).toBe('hello fuji')
    })
  })
  