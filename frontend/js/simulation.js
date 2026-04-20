// ===== CRICKET MANAGER PRO — SIMULATION ENGINE (v3) =====

window.CricketSim = {

    BASE_PROBS: {
        '0': 0.30, '1': 0.26, '2': 0.09, '3': 0.015,
        '4': 0.12, '6': 0.05, 'W': 0.08, 'WD': 0.035,
        'NB': 0.015, 'LB': 0.01,
    },

    // ---- Maps batting aggression (1-10) to shot type ----
    AGGR_SHOTS: {
        1:  ['defensive', 'defensive', 'nurdle'],
        2:  ['defensive', 'nurdle', 'drive'],
        3:  ['nurdle', 'drive', 'flick'],
        4:  ['drive', 'flick', 'nurdle'],
        5:  ['drive', 'flick', 'cut'],
        6:  ['drive', 'cut', 'pull'],
        7:  ['pull', 'loft', 'sweep'],
        8:  ['loft', 'pull', 'slog'],
        9:  ['slog', 'loft', 'scoop'],
        10: ['slog', 'slog', 'scoop'],
    },

    // ---- Maps bowling aggression (1-10) to delivery types ----
    AGGR_DELIVERIES_PACE: {
        1:  ['good_length', 'good_length', 'offcutter'],
        2:  ['good_length', 'offcutter', 'legcutter'],
        3:  ['outswinger', 'good_length', 'offcutter'],
        4:  ['outswinger', 'inswinger', 'good_length'],
        5:  ['outswinger', 'inswinger', 'slower_ball'],
        6:  ['inswinger', 'bouncer', 'outswinger'],
        7:  ['bouncer', 'yorker', 'slower_ball'],
        8:  ['yorker', 'bouncer', 'inswinger'],
        9:  ['yorker', 'yorker', 'bouncer'],
        10: ['yorker', 'yorker', 'full_toss'],
    },

    AGGR_DELIVERIES_SPIN: {
        1:  ['offbreak', 'good_length', 'offbreak'],
        2:  ['offbreak', 'offbreak', 'good_length'],
        3:  ['offbreak', 'legbreak', 'good_length'],
        4:  ['legbreak', 'offbreak', 'googly'],
        5:  ['googly', 'offbreak', 'legbreak'],
        6:  ['googly', 'doosra', 'offbreak'],
        7:  ['googly', 'doosra', 'flipper'],
        8:  ['flipper', 'googly', 'carrom_ball'],
        9:  ['googly', 'flipper', 'carrom_ball'],
        10: ['flipper', 'carrom_ball', 'full_toss'],
    },

    // ---- Fielding derived from bowling aggression ----
    AGGR_FIELDING: {
        1: 'defensive', 2: 'defensive', 3: 'defensive',
        4: 'balanced',  5: 'balanced',  6: 'balanced',
        7: 'attacking', 8: 'attacking', 9: 'attacking', 10: 'attacking',
    },

    // ---- Shot type probability modifiers ----
    SHOT_MODIFIERS: {
        'defensive':    { '0': 1.8, '1': 1.3, '2': 0.7, '4': 0.20, '6': 0.04, 'W': 0.35 },
        'nurdle':       { '0': 1.3, '1': 1.6, '2': 1.2, '4': 0.5,  '6': 0.08, 'W': 0.55 },
        'drive':        { '0': 0.8, '1': 1.0, '2': 1.3, '4': 1.7,  '6': 0.7,  'W': 1.05 },
        'flick':        { '0': 0.9, '1': 1.2, '2': 1.3, '4': 1.5,  '6': 0.8,  'W': 1.0  },
        'cut':          { '0': 0.8, '1': 1.0, '2': 1.1, '4': 1.6,  '6': 0.6,  'W': 1.1  },
        'pull':         { '0': 0.7, '1': 0.9, '2': 1.0, '4': 1.5,  '6': 1.5,  'W': 1.35 },
        'sweep':        { '0': 0.9, '1': 1.1, '2': 1.0, '4': 1.4,  '6': 0.5,  'W': 1.2  },
        'reverse_sweep':{ '0': 1.0, '1': 0.9, '2': 0.8, '4': 1.5,  '6': 0.4,  'W': 1.6  },
        'loft':         { '0': 0.7, '1': 0.7, '2': 0.8, '4': 1.4,  '6': 2.0,  'W': 1.55 },
        'slog':         { '0': 0.6, '1': 0.6, '2': 0.6, '4': 1.1,  '6': 2.5,  'W': 2.0  },
        'scoop':        { '0': 1.1, '1': 0.7, '2': 0.5, '4': 1.7,  '6': 1.6,  'W': 1.5  },
    },

    // ---- Delivery type modifiers ----
    DELIVERY_MODIFIERS: {
        'outswinger':   { '0': 1.15, '4': 0.85, '6': 0.7,  'W': 1.35, 'WD': 0.8  },
        'inswinger':    { '0': 1.15, '4': 0.8,  '6': 0.6,  'W': 1.35, 'WD': 0.9  },
        'offcutter':    { '0': 1.2,  '4': 0.9,  '6': 0.8,  'W': 1.25              },
        'legcutter':    { '0': 1.2,  '4': 0.9,  '6': 0.8,  'W': 1.25              },
        'bouncer':      { '0': 0.9,  '4': 0.7,  '6': 0.5,  'W': 1.2,  'WD': 1.5  },
        'yorker':       { '0': 1.4,  '4': 0.2,  '6': 0.05, 'W': 1.55, 'NB': 1.3  },
        'full_toss':    { '0': 0.6,  '4': 1.6,  '6': 1.5,  'W': 0.6,  'NB': 0.8  },
        'short_ball':   { '0': 1.0,  '4': 1.2,  '6': 1.2,  'W': 1.15, 'WD': 1.2  },
        'offbreak':     { '0': 1.1,  '4': 0.9,  '6': 0.8,  'W': 1.2               },
        'legbreak':     { '0': 1.05, '4': 1.0,  '6': 0.9,  'W': 1.3               },
        'googly':       { '0': 1.1,  '4': 0.85, '6': 0.7,  'W': 1.45              },
        'doosra':       { '0': 1.1,  '4': 0.85, '6': 0.7,  'W': 1.35              },
        'flipper':      { '0': 1.15, '4': 0.8,  '6': 0.6,  'W': 1.45              },
        'carrom_ball':  { '0': 1.05, '4': 0.9,  '6': 0.8,  'W': 1.3               },
        'good_length':  {},
        'slower_ball':  { '0': 1.1,  '4': 0.8,  '6': 0.7,  'W': 1.2               },
    },

    // ---- Fielding modifiers ----
    FIELDING_MODIFIERS: {
        'attacking':  { '4': 0.82, '6': 0.82, '1': 0.9,  'W': 1.28, '0': 1.12 },
        'defensive':  { '4': 0.62, '6': 0.68, '1': 1.28, '2': 1.18, 'W': 0.82 },
        'balanced':   {},
    },

    // ---- Wicket types by delivery ----
    WICKET_TYPES: {
        'outswinger':  [{ type: 'caught_behind', w: 35 }, { type: 'caught_slip', w: 30 }, { type: 'bowled', w: 20 }, { type: 'lbw', w: 15 }],
        'inswinger':   [{ type: 'bowled', w: 35 }, { type: 'lbw', w: 35 }, { type: 'caught_behind', w: 20 }, { type: 'caught', w: 10 }],
        'yorker':      [{ type: 'bowled', w: 55 }, { type: 'lbw', w: 35 }, { type: 'caught_behind', w: 10 }],
        'bouncer':     [{ type: 'caught', w: 50 }, { type: 'caught_behind', w: 30 }, { type: 'hit_wicket', w: 10 }, { type: 'lbw', w: 10 }],
        'googly':      [{ type: 'stumped', w: 30 }, { type: 'caught', w: 30 }, { type: 'bowled', w: 25 }, { type: 'lbw', w: 15 }],
        'doosra':      [{ type: 'caught', w: 30 }, { type: 'bowled', w: 25 }, { type: 'stumped', w: 25 }, { type: 'lbw', w: 20 }],
        'flipper':     [{ type: 'bowled', w: 35 }, { type: 'lbw', w: 40 }, { type: 'stumped', w: 15 }, { type: 'caught', w: 10 }],
        'offbreak':    [{ type: 'caught', w: 30 }, { type: 'bowled', w: 25 }, { type: 'stumped', w: 25 }, { type: 'lbw', w: 20 }],
        'default':     [{ type: 'caught', w: 40 }, { type: 'bowled', w: 25 }, { type: 'lbw', w: 20 }, { type: 'run_out', w: 8 }, { type: 'stumped', w: 7 }],
    },

    // ---- Commentary ----
    COMMENTARY: {
        '0': [
            '{bowler} keeps it tight — {batsman} defends. Dot ball.',
            'Good line from {bowler}, {batsman} is kept quiet.',
            '{batsman} pushes at it but finds no gap. Dot.',
            'Tight from {bowler} — {batsman} is forced back.',
            '{bowler} bowls a {delivery} — kept out by {batsman}.',
            'Excellent control from {bowler}. No run.',
        ],
        '1': [
            '{batsman} nudges it to mid-on, quick single.',
            'Worked to leg side — one run for {batsman}.',
            'Pushed into the gap, easy single.',
            '{batsman} tucks {bowler} to square leg for one.',
            'Gentle push through covers — they take the single.',
        ],
        '2': [
            '{batsman} finds the gap at extra cover — two runs!',
            'Well placed, {batsman} picks up a couple.',
            'Good running — two runs for {batsman}!',
            'Pushed wide of mid-on, they come back for two.',
        ],
        '3': [
            'Three runs! {batsman} plays to deep mid-wicket, great running!',
            'Super cricket — three runs for {batsman}!',
        ],
        '4': [
            'FOUR! {batsman} drives {bowler} through the covers beautifully!',
            'FOUR! Cracking cut shot — races to the boundary!',
            'FOUR! {batsman} flicks it off the pads, all the way!',
            'FOUR! Well-timed pull shot — {bowler} punished!',
            'FOUR! Sweet drive through extra cover from {batsman}!',
            'FOUR! {bowler} strays on the pads — whipped to the fence!',
            'FOUR! Late cut — perfectly bisects the fielders!',
        ],
        '6': [
            'SIX! {batsman} launches {bowler} high into the stands! Massive!',
            'MAXIMUM! {batsman} connects sweetly — gone all the way!',
            'SIX! The crowd erupts — {batsman} clears the rope with ease!',
            'SIX! {batsman} reads the {delivery} perfectly — sent into orbit!',
            'SIX! Deposited into the crowd! What a shot!',
            'SIX! {bowler} will be disappointed with that one!',
        ],
        'W': [
            'OUT! {bowler} claims the wicket of {batsman}! Big moment!',
            'WICKET! {batsman} walks back! {bowler} is pumped!',
            'DISMISSED! Huge breakthrough for the fielding side!',
            'OUT! The umpire raises the finger — {batsman} is gone!',
            'WICKET! {bowler} gets the job done!',
        ],
        'WD': [
            'Wide! {bowler} strays down the leg side.',
            'Wide ball! Misses the line — extra run.',
            'Too wide. Free run for the batting team.',
        ],
        'NB': [
            'NO BALL! {bowler} oversteps — FREE HIT!',
            'No ball! Front foot over the line. Free hit!',
        ],
        'LB': [
            'Leg byes! The ball flicks the pad and runs away.',
            'Off the pad — leg bye signalled.',
        ],
        'W_fatigue': [
            '{batsman} looks tired — mistimes a {delivery} and is caught!',
            'Fatigue shows! {batsman} misjudges the shot — OUT!',
            '{batsman} is running on empty — a loose shot costs the wicket!',
        ],
        'WD_fatigue': [
            '{bowler} is tired — sprays it down leg. Wide!',
            'Fatigue creeping in for {bowler} — strays wildly.',
        ],
    },

    WICKET_DESC: {
        'caught':       (b) => `caught at ${['mid-off','cover','mid-on','backward point','square leg'][Math.floor(Math.random()*5)]} off ${b}`,
        'caught_behind':(b) => `caught behind by the keeper off ${b}`,
        'caught_slip':  (b) => `caught at first slip off ${b}`,
        'bowled':       (b) => `bowled by ${b}! The stumps are disturbed!`,
        'lbw':          (b) => `lbw — struck plumb in front, given by the umpire off ${b}`,
        'stumped':      (b) => `stumped! The keeper was lightning-fast off ${b}`,
        'run_out':      ()  => 'run out! Brilliant direct hit!',
        'hit_wicket':   (b) => `hit wicket off ${b}`,
    },

    // ===== ENERGY FACTOR =====
    // Returns a 0.0–1.0 multiplier applied to batting/bowling ratings
    energyFactor(energy) {
        if (energy >= 80) return 1.00;
        if (energy >= 65) return 0.93;
        if (energy >= 50) return 0.83;
        if (energy >= 35) return 0.70;
        if (energy >= 20) return 0.57;
        return 0.44;
    },

    // ===== CORE: simulate one ball =====
    simulateBall(config) {
        const {
            batsman, bowler,
            battingAggression = 5,   // 1-10
            bowlingAggression = 5,   // 1-10
            fieldingMode,
            matchState = {},
            difficulty = 'medium',
            isUserBatting = true,
            batsmanEnergy = 100,     // 0–100
            bowlerEnergy  = 100,     // 0–100
        } = config;

        const shotType     = this.shotFromAggression(battingAggression, batsman, matchState);
        const deliveryType = this.deliveryFromAggression(bowlingAggression, bowler, matchState);
        const fieldMode    = fieldingMode || this.AGGR_FIELDING[Math.round(bowlingAggression)] || 'balanced';

        let probs = { ...this.BASE_PROBS };

        // ---- Batsman skill (scaled by energy) ----
        const bEF = this.energyFactor(batsmanEnergy);
        const br  = ((batsman?.battingRating || 60) / 100) * bEF;
        probs['4'] *= (0.3 + br * 1.1);
        probs['6'] *= (0.2 + br * 0.9);
        probs['1'] *= (0.6 + br * 0.7);
        probs['W'] *= Math.max(0.3, 2.2 - br * 1.8);   // tired batsman gets out more
        probs['0'] *= Math.max(0.4, 1.4 - br * 0.6);

        // ---- Bowler skill (scaled by energy) ----
        const bwlEF = this.energyFactor(bowlerEnergy);
        const bwl   = ((bowler?.bowlingRating || 60) / 100) * bwlEF;
        probs['W']  *= (0.4 + bwl * 1.2);
        probs['0']  *= (0.5 + bwl * 0.9);
        probs['4']  *= Math.max(0.3, 1.6 - bwl * 1.0);
        probs['6']  *= Math.max(0.2, 1.5 - bwl * 1.0);
        // Tired bowler sprays more wides/no-balls
        if (bowlerEnergy < 50) {
            probs['WD'] *= 1.0 + (50 - bowlerEnergy) / 40;
            probs['NB'] *= 1.0 + (50 - bowlerEnergy) / 60;
        }

        // ---- Shot modifier (key realism lever: slog → high W, defensive → low W) ----
        const shotMod = this.SHOT_MODIFIERS[shotType] || {};
        Object.entries(shotMod).forEach(([k, v]) => { if (probs[k] !== undefined) probs[k] *= v; });

        // ---- Direct aggression → wicket scaling (on top of shot modifiers) ----
        // aggression 1 → 0.55x W, aggression 5 → 1.0x W, aggression 10 → 1.9x W
        const aggrWMult = 0.55 + (battingAggression - 1) * (1.35 / 9);
        probs['W'] *= aggrWMult;
        // High aggression also boosts boundaries but at the cost of dots
        if (battingAggression >= 8) {
            probs['4'] *= 1.1; probs['6'] *= 1.2; probs['0'] *= 0.85;
        } else if (battingAggression <= 2) {
            probs['4'] *= 0.7; probs['6'] *= 0.4; probs['0'] *= 1.2;
        }

        // ---- Delivery modifier ----
        const delMod = this.DELIVERY_MODIFIERS[deliveryType] || {};
        Object.entries(delMod).forEach(([k, v]) => { if (probs[k] !== undefined) probs[k] *= v; });

        // ---- Fielding modifier ----
        const fldMod = this.FIELDING_MODIFIERS[fieldMode] || {};
        Object.entries(fldMod).forEach(([k, v]) => { if (probs[k] !== undefined) probs[k] *= v; });

        // ---- Match pressure ----
        if (matchState.isDeathOvers) {
            probs['6'] *= 1.3; probs['4'] *= 1.15; probs['W'] *= 1.1; probs['0'] *= 0.85;
        }
        if (matchState.isPowerplay) {
            probs['4'] *= 1.2; probs['6'] *= 1.1; probs['WD'] *= 0.8;
        }
        if (matchState.pressure > 0.7) {
            probs['W'] *= 1.15; probs['0'] *= 1.1;
        }

        // ---- Difficulty modifier ----
        probs = this.applyDifficulty(probs, difficulty, isUserBatting);

        // Normalize
        const total = Object.values(probs).reduce((a, b) => a + b, 0);
        Object.keys(probs).forEach(k => probs[k] /= total);

        const outcome = this.weightedRandom(probs);

        let wicketType = null;
        let commentary;
        if (outcome === 'W') {
            const opts = this.WICKET_TYPES[deliveryType] || this.WICKET_TYPES['default'];
            wicketType = this.weightedRandomArr(opts);
            // Fatigue-flavoured commentary
            const fatigueLine = batsmanEnergy < 40 && Math.random() < 0.4;
            commentary = fatigueLine
                ? this.buildFatigueCommentary('W_fatigue', batsman, bowler, deliveryType, wicketType)
                : this.buildCommentary(outcome, batsman, bowler, deliveryType, wicketType);
        } else if (outcome === 'WD' && bowlerEnergy < 40 && Math.random() < 0.35) {
            commentary = this.buildFatigueCommentary('WD_fatigue', batsman, bowler, deliveryType, null);
        } else {
            commentary = this.buildCommentary(outcome, batsman, bowler, deliveryType, wicketType);
        }

        const runs = (() => {
            if (outcome === 'W') return 0;
            if (['WD','NB','LB'].includes(outcome)) return 1;
            return parseInt(outcome) || 0;
        })();

        return {
            outcome, runs,
            isWicket: outcome === 'W',
            isExtra: ['WD','NB','LB'].includes(outcome),
            extraType: ['WD','NB','LB'].includes(outcome) ? outcome : null,
            isBoundary: outcome === '4',
            isSix: outcome === '6',
            isNoBall: outcome === 'NB',
            isWide: outcome === 'WD',
            wicketType, commentary,
            shotUsed: shotType,
            deliveryUsed: deliveryType,
            fieldingUsed: fieldMode,
        };
    },

    // ---- Shot selection from aggression level ----
    shotFromAggression(aggression, batsman, matchState) {
        const level = Math.max(1, Math.min(10, Math.round(aggression)));
        const options = this.AGGR_SHOTS[level] || ['drive'];
        return options[Math.floor(Math.random() * options.length)];
    },

    // ---- Delivery selection from bowling aggression ----
    deliveryFromAggression(aggression, bowler, matchState) {
        const level = Math.max(1, Math.min(10, Math.round(aggression)));
        const style = (bowler?.bowlingStyle || '').toLowerCase();
        const isSpin = style.includes('spin') || style.includes('break') || style.includes('orthodox');
        const table = isSpin ? this.AGGR_DELIVERIES_SPIN : this.AGGR_DELIVERIES_PACE;
        const options = table[level] || ['good_length'];
        return options[Math.floor(Math.random() * options.length)];
    },

    // ---- Fielding from bowling aggression ----
    fieldingFromAggression(aggression) {
        return this.AGGR_FIELDING[Math.round(aggression)] || 'balanced';
    },

    // ---- Difficulty modifier ----
    applyDifficulty(probs, difficulty, isUserBatting) {
        const p = { ...probs };
        if (difficulty === 'easy') {
            if (isUserBatting) {
                // User bats very comfortably — far fewer wickets, more runs
                p['4'] *= 1.35; p['6'] *= 1.28; p['W'] *= 0.52; p['1'] *= 1.18; p['2'] *= 1.12;
            } else {
                // AI batting is poor — lots of wickets, few boundaries
                p['4'] *= 0.68; p['6'] *= 0.62; p['W'] *= 1.55; p['0'] *= 1.18;
            }
        } else if (difficulty === 'medium') {
            if (isUserBatting) {
                // Mild user advantage — slightly fewer wickets, marginally more scoring
                p['4'] *= 1.1; p['6'] *= 1.08; p['W'] *= 0.84; p['1'] *= 1.06;
            } else {
                // Mild AI disadvantage — slightly fewer boundaries, slightly more wickets
                p['4'] *= 0.88; p['6'] *= 0.85; p['W'] *= 1.18;
            }
        } else if (difficulty === 'hard') {
            if (isUserBatting) {
                // User batting is tough — more wickets, fewer boundaries
                p['4'] *= 0.82; p['6'] *= 0.76; p['W'] *= 1.35;
            } else {
                // AI bats freely — more boundaries, fewer wickets
                p['4'] *= 1.18; p['6'] *= 1.15; p['W'] *= 0.75;
            }
        }
        return p;
    },

    // ---- AI: decide batting aggression based on match situation ----
    aiDecideBattingAggression(matchState, difficulty) {
        const { wickets = 0, ballsLeft = 60, runsNeeded = null, totalBalls = 120, isChasing = false } = matchState;

        let base = 5;

        if (isChasing && runsNeeded !== null) {
            const rrr = (runsNeeded / Math.max(1, ballsLeft)) * 6;
            if      (rrr > 14) base = 10;
            else if (rrr > 11) base = 9;
            else if (rrr > 9)  base = 8;
            else if (rrr > 7)  base = 7;
            else if (rrr < 5)  base = 4;
            else               base = 6;
        } else {
            const progress = 1 - (ballsLeft / totalBalls);
            if      (progress < 0.25) base = 5;
            else if (progress < 0.55) base = 6;
            else if (progress < 0.75) base = 7;
            else                      base = 9;
        }

        if      (wickets >= 8) base = Math.max(3, base - 3);
        else if (wickets >= 6) base = Math.max(4, base - 2);
        else if (wickets >= 4) base = Math.max(5, base - 1);

        if (difficulty === 'easy')   base = Math.max(1, base - 3);
        if (difficulty === 'medium') base = Math.max(2, base - 1);
        if (difficulty === 'hard')   base = Math.min(10, base + 2);

        return Math.max(1, Math.min(10, base + (Math.random() > 0.5 ? 1 : -1)));
    },

    // ---- AI: decide bowling aggression ----
    aiDecideBowlingAggression(matchState, difficulty) {
        const { isDeathOvers, isPowerplay, wickets = 0, ballsLeft = 60, runsNeeded = null } = matchState;

        let base = 5;

        if (isDeathOvers)  base = 8;
        if (isPowerplay)   base = 6;

        if (runsNeeded !== null) {
            const rrr = (runsNeeded / Math.max(1, ballsLeft)) * 6;
            if (rrr < 5)       base = Math.max(3, base - 1);
            else if (rrr > 10) base = Math.min(9, base + 1);
        }

        if (wickets < 2) base = Math.max(4, base - 1);
        if (wickets > 7) base = Math.min(4, base - 2);

        if (difficulty === 'easy')   base = Math.max(1, base - 3);
        if (difficulty === 'medium') base = Math.max(2, base - 1);
        if (difficulty === 'hard')   base = Math.min(10, base + 3);

        return Math.max(1, Math.min(10, base + (Math.random() > 0.5 ? 1 : -1)));
    },

    // ---- Helpers ----
    weightedRandom(probs) {
        let r = Math.random();
        for (const [k, p] of Object.entries(probs)) { r -= p; if (r <= 0) return k; }
        return '0';
    },

    weightedRandomArr(arr) {
        const total = arr.reduce((s, x) => s + x.w, 0);
        let r = Math.random() * total;
        for (const item of arr) { r -= item.w; if (r <= 0) return item.type; }
        return arr[0].type;
    },

    buildCommentary(outcome, batsman, bowler, deliveryType, wicketType) {
        const templates = this.COMMENTARY[outcome] || ['{bowler} bowls to {batsman}.'];
        let t = templates[Math.floor(Math.random() * templates.length)];
        t = t.replace('{batsman}', batsman?.name || 'Batsman')
              .replace('{bowler}', bowler?.name || 'Bowler')
              .replace('{delivery}', (deliveryType || 'delivery').replace(/_/g, ' '));
        if (outcome === 'W' && wicketType) {
            const fn = this.WICKET_DESC[wicketType];
            const desc = fn ? fn(bowler?.name || 'the bowler') : 'dismissed';
            t = `OUT! ${batsman?.name} is ${desc}!`;
        }
        return t;
    },

    buildFatigueCommentary(key, batsman, bowler, deliveryType, wicketType) {
        const templates = this.COMMENTARY[key] || [];
        if (!templates.length) return this.buildCommentary(key.replace('_fatigue',''), batsman, bowler, deliveryType, wicketType);
        let t = templates[Math.floor(Math.random() * templates.length)];
        t = t.replace('{batsman}', batsman?.name || 'Batsman')
              .replace('{bowler}', bowler?.name || 'Bowler')
              .replace('{delivery}', (deliveryType || 'delivery').replace(/_/g, ' '));
        if (wicketType) {
            const fn = this.WICKET_DESC[wicketType];
            const desc = fn ? fn(bowler?.name || 'the bowler') : 'dismissed';
            t += ` ${batsman?.name} is ${desc}!`;
        }
        return t;
    },

    // ---- Display helpers ----
    aggrLabel(v) {
        v = Math.round(v);
        if (v <= 2)  return { label: 'Defensive',  color: '#40c4ff' };
        if (v <= 4)  return { label: 'Cautious',   color: '#69f0ae' };
        if (v <= 6)  return { label: 'Balanced',   color: '#ffd740' };
        if (v <= 8)  return { label: 'Aggressive', color: '#ff9100' };
        return              { label: 'Max Attack', color: '#ff5252' };
    },

    bowlAggrLabel(v) {
        v = Math.round(v);
        if (v <= 2)  return { label: 'Economy',     color: '#40c4ff' };
        if (v <= 4)  return { label: 'Controlled',  color: '#69f0ae' };
        if (v <= 6)  return { label: 'Balanced',    color: '#ffd740' };
        if (v <= 8)  return { label: 'Attacking',   color: '#ff9100' };
        return              { label: 'Wicket Hunt', color: '#ff5252' };
    },

    energyLabel(e) {
        if (e >= 80) return { label: 'Fresh',    color: '#00e676' };
        if (e >= 60) return { label: 'Good',     color: '#69f0ae' };
        if (e >= 40) return { label: 'Tired',    color: '#ffd740' };
        if (e >= 20) return { label: 'Fatigued', color: '#ff9100' };
        return              { label: 'Exhausted',color: '#ff5252' };
    },

    calcRRR(runsNeeded, ballsLeft) {
        if (ballsLeft <= 0) return '∞';
        return ((runsNeeded / ballsLeft) * 6).toFixed(2);
    },

    calcCRR(runs, balls) {
        if (balls <= 0) return '0.00';
        return ((runs / balls) * 6).toFixed(2);
    },

    calcPressure({ wickets = 0, ballsLeft = 60, runsNeeded = null, totalBalls = 120 }) {
        if (!runsNeeded) return 0;
        const wp = wickets / 10;
        const rp = Math.min(1, (runsNeeded / Math.max(1, ballsLeft)) * 6 / 20);
        const tp = 1 - (ballsLeft / totalBalls);
        return Math.min(1, wp * 0.3 + rp * 0.4 + tp * 0.3);
    },

    deliveryDisplayName(d) {
        return {
            'outswinger': 'Outswinger', 'inswinger': 'Inswinger',
            'offcutter': 'Off Cutter', 'legcutter': 'Leg Cutter',
            'bouncer': 'Bouncer', 'yorker': 'Yorker',
            'full_toss': 'Full Toss', 'good_length': 'Good Length',
            'offbreak': 'Off Break', 'legbreak': 'Leg Break',
            'googly': 'Googly', 'doosra': 'Doosra',
            'flipper': 'Flipper', 'carrom_ball': 'Carrom Ball',
            'slower_ball': 'Slower Ball', 'short_ball': 'Short Ball',
        }[d] || d;
    },

    shotDisplayName(s) {
        return {
            'defensive': 'Defensive', 'nurdle': 'Nurdle/Tap',
            'drive': 'Drive', 'flick': 'Flick',
            'cut': 'Cut', 'pull': 'Pull',
            'sweep': 'Sweep', 'loft': 'Loft',
            'slog': 'Slog', 'scoop': 'Scoop',
        }[s] || s;
    },
};
