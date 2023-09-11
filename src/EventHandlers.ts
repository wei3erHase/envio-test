import {
    SAFEEngineContract_ModifySAFECollateralization_handler,
} from "../generated/src/Handlers.gen";

SAFEEngineContract_ModifySAFECollateralization_handler(({event, context}) => {
    console.log(event);
    console.log(context);

    context.safemodification.set({
        id: event.blockHash.toString(),
        cType: event.params._cType.toString(),
        safe: event.params._safe.toString(),
        collateralSource: event.params._collateralSource.toString(),
        debtDestination: event.params._debtDestination.toString(),
        deltaCollateral: BigInt(event.params._deltaCollateral.toString()),
        deltaDebt: BigInt(event.params._deltaDebt.toString()),
      });
});