toString(precision) {
        // default to display in mint denom if it has more than 4 decimal places
        let minStake = Coin.StakingCoin.fraction / (precision ? (10 ** precision) : 10000)
        if (this.amount === 0) {
            return `0 ${this._coin.displayName}`
        } else if (this.amount < minStake) {
            return `${numbro(this.amount).format('0,0.000000' )} ${this._coin.denom}`;
        } else if (!this._coin.displayName) {
            return `${this.stakingAmount ?? 0} ${Coin.StakingCoin.displayName}`
        } else if (this.amount % 1 === 0) {
            return `${this.stakingAmount} ${this._coin.displayName}`
        } else {
            return `${precision?numbro(this.stakingAmount).format('0,0.' + '0'.repeat(precision)):autoformat(this.stakingAmount)} ${this._coin.displayName}`
        }
    }
}
