import { of } from "rxjs";
import { createProductEpic } from "./createProductEpic";
import { initialState } from "../../../../rootStore/initialState";
import { createProductRequest, createProductSuccess } from "../productActions";
import { takeLast, toArray } from "rxjs/operators";

const mockResponse = { name: "audi" };
const mockCreateProductRequest$ = of(createProductRequest);
const emptyAction$ = of({ type: "DO_NOTHING" });
const state$ = of(initialState); // not needed for this epic
const mockDependencies = {
  httpPost: (url: string, body: any, headers: any) => of(body)
};

// Adapt this example to your test framework and specific use cases

describe("createProductEpic", () => {
  it("should do nothing while createProductActions is not provided", (done) => {

      createProductEpic(emptyAction$, state$, mockDependencies).subscribe((result$: any) => expect(result$).toEqual({}))
    
  },1000);
  it("should return createProductSucess while response is positive", (done) => {
    createProductEpic(
      mockCreateProductRequest$,
      state$,
      mockDependencies
    ).subscribe((result$: any) =>{
        done()
      expect(result$).toEqual(of(createProductSuccess))}
    );
  },1000);
});
