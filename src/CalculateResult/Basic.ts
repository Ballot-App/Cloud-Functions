import {BasicVote} from "../enums/basicVote.enum";
import {BasicResultModel} from "../models/basicResult.model";

export const CalculateBasicResult = (votes: BasicVote[]): BasicResultModel => {
    const result = {
        passed: false,
        for: 0,
        abstain: 0,
        against: 0
    };

    for (const vote of votes) {
        switch (vote) {
            case BasicVote.For:
                result.for ++;
                break;

            case BasicVote.Abstain:
                result.abstain ++;
                break;

            case BasicVote.Against:
                result.against ++;
                break;

            default:
                break;
        }
    }

    result.passed = result.for > result.against;

    return result;
};