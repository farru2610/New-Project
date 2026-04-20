// ===== CRICKET MANAGER PRO — TEAMS & PLAYERS DATA =====

window.TEAMS_DATA = [
    // ===== INTERNATIONAL TEAMS =====
    {
        id: 'india', name: 'India', shortName: 'IND', flag: '🇮🇳',
        rating: 118, primaryColor: '#003580', secondaryColor: '#FF9933',
        type: 'international',
        squad: [
            { id: 'rohit', name: 'Rohit Sharma', role: 'Batsman', battingRating: 88, bowlingRating: 20, sr: 140, avg: 48, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'shubman', name: 'Shubman Gill', role: 'Batsman', battingRating: 85, bowlingRating: 10, sr: 138, avg: 54, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'kohli', name: 'Virat Kohli', role: 'Batsman', battingRating: 92, bowlingRating: 15, sr: 137, avg: 58, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'shreyas', name: 'Shreyas Iyer', role: 'Batsman', battingRating: 80, bowlingRating: 10, sr: 135, avg: 44, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'kl', name: 'KL Rahul', role: 'WK-Batsman', battingRating: 84, bowlingRating: 5, sr: 132, avg: 47, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'hardik', name: 'Hardik Pandya', role: 'All-rounder', battingRating: 78, bowlingRating: 76, sr: 145, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'jadeja', name: 'Ravindra Jadeja', role: 'All-rounder', battingRating: 72, bowlingRating: 85, sr: 128, avg: 35, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'axar', name: 'Axar Patel', role: 'All-rounder', battingRating: 68, bowlingRating: 80, sr: 130, avg: 30, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'bumrah', name: 'Jasprit Bumrah', role: 'Bowler', battingRating: 20, bowlingRating: 95, sr: 80, avg: 8, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
            { id: 'shami', name: 'Mohammed Shami', role: 'Bowler', battingRating: 18, bowlingRating: 88, sr: 75, avg: 7, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'siraj', name: 'Mohammed Siraj', role: 'Bowler', battingRating: 15, bowlingRating: 82, sr: 70, avg: 6, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
        ],
        topOrder: ['rohit', 'shubman', 'kohli', 'shreyas', 'kl'],
        allRounders: ['hardik', 'jadeja', 'axar'],
        bowlers: ['bumrah', 'shami', 'siraj'],
    },
    {
        id: 'australia', name: 'Australia', shortName: 'AUS', flag: '🇦🇺',
        rating: 122, primaryColor: '#FFD700', secondaryColor: '#006400',
        type: 'international',
        squad: [
            { id: 'warner', name: 'David Warner', role: 'Batsman', battingRating: 87, bowlingRating: 15, sr: 144, avg: 45, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'finch', name: 'Travis Head', role: 'Batsman', battingRating: 86, bowlingRating: 20, sr: 146, avg: 47, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'smith', name: 'Steve Smith', role: 'Batsman', battingRating: 93, bowlingRating: 35, sr: 130, avg: 60, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm leg-break' },
            { id: 'maxwell', name: 'Glenn Maxwell', role: 'All-rounder', battingRating: 85, bowlingRating: 72, sr: 160, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'inglis', name: 'Josh Inglis', role: 'WK-Batsman', battingRating: 76, bowlingRating: 5, sr: 138, avg: 36, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'stoinis', name: 'Marcus Stoinis', role: 'All-rounder', battingRating: 77, bowlingRating: 73, sr: 140, avg: 36, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'starc', name: 'Mitchell Starc', role: 'Bowler', battingRating: 30, bowlingRating: 90, sr: 85, avg: 10, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm fast' },
            { id: 'hazlewood', name: 'Josh Hazlewood', role: 'Bowler', battingRating: 22, bowlingRating: 87, sr: 72, avg: 8, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'cummins', name: 'Pat Cummins', role: 'All-rounder', battingRating: 45, bowlingRating: 91, sr: 95, avg: 15, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
            { id: 'zampa', name: 'Adam Zampa', role: 'Bowler', battingRating: 20, bowlingRating: 85, sr: 70, avg: 6, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm leg-break' },
            { id: 'khawaja', name: 'Usman Khawaja', role: 'Batsman', battingRating: 83, bowlingRating: 5, sr: 128, avg: 52, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm medium' },
        ],
        topOrder: ['warner', 'finch', 'smith', 'maxwell', 'inglis'],
        allRounders: ['stoinis', 'cummins'],
        bowlers: ['starc', 'hazlewood', 'zampa'],
    },
    {
        id: 'england', name: 'England', shortName: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        rating: 115, primaryColor: '#003399', secondaryColor: '#FFFFFF',
        type: 'international',
        squad: [
            { id: 'buttler', name: 'Jos Buttler', role: 'WK-Batsman', battingRating: 88, bowlingRating: 5, sr: 152, avg: 44, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'salt', name: 'Phil Salt', role: 'WK-Batsman', battingRating: 82, bowlingRating: 5, sr: 154, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'malan', name: 'Dawid Malan', role: 'Batsman', battingRating: 80, bowlingRating: 10, sr: 135, avg: 40, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm leg-break' },
            { id: 'stokes', name: 'Ben Stokes', role: 'All-rounder', battingRating: 87, bowlingRating: 83, sr: 142, avg: 45, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'brook', name: 'Harry Brook', role: 'Batsman', battingRating: 86, bowlingRating: 15, sr: 148, avg: 46, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'livingstone', name: 'Liam Livingstone', role: 'All-rounder', battingRating: 82, bowlingRating: 74, sr: 158, avg: 36, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm leg-break' },
            { id: 'curran', name: 'Sam Curran', role: 'All-rounder', battingRating: 70, bowlingRating: 80, sr: 132, avg: 28, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm fast-medium' },
            { id: 'archer', name: 'Jofra Archer', role: 'Bowler', battingRating: 28, bowlingRating: 89, sr: 80, avg: 9, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
            { id: 'woakes', name: 'Chris Woakes', role: 'All-rounder', battingRating: 55, bowlingRating: 83, sr: 110, avg: 22, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'rashid', name: 'Adil Rashid', role: 'Bowler', battingRating: 25, bowlingRating: 84, sr: 78, avg: 8, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm leg-break' },
            { id: 'wood', name: 'Mark Wood', role: 'Bowler', battingRating: 22, bowlingRating: 86, sr: 72, avg: 7, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
        ],
        topOrder: ['buttler', 'salt', 'malan', 'brook', 'stokes'],
        allRounders: ['livingstone', 'curran', 'woakes'],
        bowlers: ['archer', 'rashid', 'wood'],
    },
    {
        id: 'pakistan', name: 'Pakistan', shortName: 'PAK', flag: '🇵🇰',
        rating: 104, primaryColor: '#01411C', secondaryColor: '#FFFFFF',
        type: 'international',
        squad: [
            { id: 'babar', name: 'Babar Azam', role: 'Batsman', battingRating: 91, bowlingRating: 5, sr: 132, avg: 56, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'fakhar', name: 'Fakhar Zaman', role: 'Batsman', battingRating: 83, bowlingRating: 5, sr: 142, avg: 44, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'rizwan', name: 'Mohammad Rizwan', role: 'WK-Batsman', battingRating: 86, bowlingRating: 5, sr: 130, avg: 48, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'shadab', name: 'Shadab Khan', role: 'All-rounder', battingRating: 70, bowlingRating: 83, sr: 130, avg: 28, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm leg-break' },
            { id: 'imad', name: 'Imad Wasim', role: 'All-rounder', battingRating: 68, bowlingRating: 78, sr: 125, avg: 26, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'shaheen', name: 'Shaheen Afridi', role: 'Bowler', battingRating: 20, bowlingRating: 90, sr: 75, avg: 7, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm fast' },
            { id: 'haris', name: 'Haris Rauf', role: 'Bowler', battingRating: 18, bowlingRating: 87, sr: 70, avg: 6, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
            { id: 'naseem', name: 'Naseem Shah', role: 'Bowler', battingRating: 16, bowlingRating: 85, sr: 65, avg: 5, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
            { id: 'iftikhar', name: 'Iftikhar Ahmed', role: 'All-rounder', battingRating: 75, bowlingRating: 65, sr: 140, avg: 32, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'agha', name: 'Agha Salman', role: 'All-rounder', battingRating: 69, bowlingRating: 70, sr: 128, avg: 29, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'usama', name: 'Usama Mir', role: 'Bowler', battingRating: 15, bowlingRating: 80, sr: 68, avg: 5, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm leg-break' },
        ],
        topOrder: ['babar', 'fakhar', 'rizwan', 'iftikhar', 'agha'],
        allRounders: ['shadab', 'imad'],
        bowlers: ['shaheen', 'haris', 'naseem'],
    },
    {
        id: 'southafrica', name: 'South Africa', shortName: 'SA', flag: '🇿🇦',
        rating: 108, primaryColor: '#007A4D', secondaryColor: '#FFB612',
        type: 'international',
        squad: [
            { id: 'decock', name: 'Quinton de Kock', role: 'WK-Batsman', battingRating: 87, bowlingRating: 5, sr: 145, avg: 46, battingStyle: 'Left-hand bat', bowlingStyle: 'None' },
            { id: 'hendricks', name: 'Reeza Hendricks', role: 'Batsman', battingRating: 78, bowlingRating: 5, sr: 135, avg: 40, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'bavuma', name: 'Temba Bavuma', role: 'Batsman', battingRating: 80, bowlingRating: 10, sr: 128, avg: 42, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'miller', name: 'David Miller', role: 'Batsman', battingRating: 85, bowlingRating: 5, sr: 155, avg: 40, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'klaasen', name: 'Heinrich Klaasen', role: 'WK-Batsman', battingRating: 83, bowlingRating: 5, sr: 152, avg: 39, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'markram', name: 'Aiden Markram', role: 'All-rounder', battingRating: 79, bowlingRating: 70, sr: 138, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'jansen', name: 'Marco Jansen', role: 'All-rounder', battingRating: 55, bowlingRating: 83, sr: 115, avg: 22, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm fast' },
            { id: 'ngidi', name: 'Lungi Ngidi', role: 'Bowler', battingRating: 18, bowlingRating: 85, sr: 68, avg: 6, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
            { id: 'rabada', name: 'Kagiso Rabada', role: 'Bowler', battingRating: 25, bowlingRating: 91, sr: 75, avg: 8, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
            { id: 'maharaj', name: 'Keshav Maharaj', role: 'Bowler', battingRating: 30, bowlingRating: 82, sr: 80, avg: 10, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'shamsi', name: 'Tabraiz Shamsi', role: 'Bowler', battingRating: 15, bowlingRating: 84, sr: 65, avg: 5, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm wrist-spin' },
        ],
        topOrder: ['decock', 'hendricks', 'bavuma', 'miller', 'klaasen'],
        allRounders: ['markram', 'jansen'],
        bowlers: ['rabada', 'ngidi', 'shamsi'],
    },
    {
        id: 'newzealand', name: 'New Zealand', shortName: 'NZ', flag: '🇳🇿',
        rating: 99, primaryColor: '#000000', secondaryColor: '#FFFFFF',
        type: 'international',
        squad: [
            { id: 'conway', name: 'Devon Conway', role: 'WK-Batsman', battingRating: 84, bowlingRating: 5, sr: 130, avg: 48, battingStyle: 'Left-hand bat', bowlingStyle: 'None' },
            { id: 'guptill', name: 'Finn Allen', role: 'Batsman', battingRating: 80, bowlingRating: 5, sr: 155, avg: 35, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'williamson', name: 'Kane Williamson', role: 'Batsman', battingRating: 90, bowlingRating: 30, sr: 128, avg: 56, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'latham', name: 'Tom Latham', role: 'WK-Batsman', battingRating: 79, bowlingRating: 5, sr: 125, avg: 42, battingStyle: 'Left-hand bat', bowlingStyle: 'None' },
            { id: 'phillips', name: 'Glenn Phillips', role: 'WK-Batsman', battingRating: 82, bowlingRating: 35, sr: 148, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'neesham', name: 'Jimmy Neesham', role: 'All-rounder', battingRating: 74, bowlingRating: 72, sr: 140, avg: 30, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'santner', name: 'Mitchell Santner', role: 'All-rounder', battingRating: 65, bowlingRating: 80, sr: 118, avg: 25, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'southee', name: 'Tim Southee', role: 'Bowler', battingRating: 30, bowlingRating: 84, sr: 85, avg: 10, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'boult', name: 'Trent Boult', role: 'Bowler', battingRating: 20, bowlingRating: 87, sr: 72, avg: 7, battingStyle: 'Right-hand bat', bowlingStyle: 'Left-arm fast-medium' },
            { id: 'henry', name: 'Matt Henry', role: 'Bowler', battingRating: 18, bowlingRating: 82, sr: 68, avg: 6, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'bracewell', name: 'Michael Bracewell', role: 'All-rounder', battingRating: 72, bowlingRating: 74, sr: 132, avg: 28, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
        ],
        topOrder: ['conway', 'guptill', 'williamson', 'latham', 'phillips'],
        allRounders: ['neesham', 'santner', 'bracewell'],
        bowlers: ['southee', 'boult', 'henry'],
    },
    {
        id: 'westindies', name: 'West Indies', shortName: 'WI', flag: '🏝️',
        rating: 90, primaryColor: '#7B1818', secondaryColor: '#FFD700',
        type: 'international',
        squad: [
            { id: 'king', name: 'Brandon King', role: 'Batsman', battingRating: 78, bowlingRating: 5, sr: 138, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'campbell', name: 'Johnson Charles', role: 'Batsman', battingRating: 76, bowlingRating: 5, sr: 148, avg: 34, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'pooran', name: 'Nicholas Pooran', role: 'WK-Batsman', battingRating: 85, bowlingRating: 5, sr: 155, avg: 40, battingStyle: 'Left-hand bat', bowlingStyle: 'None' },
            { id: 'pollard', name: 'Rovman Powell', role: 'Batsman', battingRating: 80, bowlingRating: 20, sr: 160, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'holder', name: 'Jason Holder', role: 'All-rounder', battingRating: 72, bowlingRating: 82, sr: 120, avg: 30, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'russell', name: 'Andre Russell', role: 'All-rounder', battingRating: 84, bowlingRating: 80, sr: 172, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'nkrumah', name: 'Akeal Hosein', role: 'All-rounder', battingRating: 62, bowlingRating: 76, sr: 118, avg: 22, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'thomas', name: 'Alzarri Joseph', role: 'Bowler', battingRating: 20, bowlingRating: 86, sr: 70, avg: 7, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
            { id: 'mccoy', name: 'Obed McCoy', role: 'Bowler', battingRating: 15, bowlingRating: 82, sr: 65, avg: 5, battingStyle: 'Right-hand bat', bowlingStyle: 'Left-arm fast' },
            { id: 'narine', name: 'Sunil Narine', role: 'All-rounder', battingRating: 75, bowlingRating: 88, sr: 145, avg: 28, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'hetmyer', name: 'Shimron Hetmyer', role: 'Batsman', battingRating: 82, bowlingRating: 5, sr: 155, avg: 38, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm medium' },
        ],
        topOrder: ['king', 'campbell', 'pooran', 'pollard', 'hetmyer'],
        allRounders: ['russell', 'holder', 'narine'],
        bowlers: ['thomas', 'mccoy', 'nkrumah'],
    },
    {
        id: 'srilanka', name: 'Sri Lanka', shortName: 'SL', flag: '🇱🇰',
        rating: 85, primaryColor: '#003478', secondaryColor: '#F4C430',
        type: 'international',
        squad: [
            { id: 'kusal', name: 'Kusal Mendis', role: 'WK-Batsman', battingRating: 82, bowlingRating: 5, sr: 138, avg: 42, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'nissanka', name: 'Pathum Nissanka', role: 'Batsman', battingRating: 80, bowlingRating: 5, sr: 132, avg: 44, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'charith', name: 'Charith Asalanka', role: 'Batsman', battingRating: 78, bowlingRating: 15, sr: 135, avg: 40, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'dhananjaya', name: 'Dhananjaya de Silva', role: 'All-rounder', battingRating: 76, bowlingRating: 72, sr: 128, avg: 36, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'hasaranga', name: 'Wanindu Hasaranga', role: 'All-rounder', battingRating: 68, bowlingRating: 87, sr: 130, avg: 26, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm leg-break' },
            { id: 'shanaka', name: 'Dasun Shanaka', role: 'All-rounder', battingRating: 74, bowlingRating: 70, sr: 138, avg: 28, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'mathews', name: 'Angelo Mathews', role: 'All-rounder', battingRating: 79, bowlingRating: 65, sr: 120, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'madushanka', name: 'Matheesha Pathirana', role: 'Bowler', battingRating: 12, bowlingRating: 84, sr: 60, avg: 5, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
            { id: 'nuwan', name: 'Nuwan Thushara', role: 'Bowler', battingRating: 14, bowlingRating: 80, sr: 62, avg: 4, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'binura', name: 'Binura Fernando', role: 'Bowler', battingRating: 16, bowlingRating: 78, sr: 65, avg: 5, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm fast-medium' },
            { id: 'maheesh', name: 'Maheesh Theekshana', role: 'Bowler', battingRating: 10, bowlingRating: 82, sr: 60, avg: 4, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
        ],
        topOrder: ['kusal', 'nissanka', 'charith', 'mathews', 'shanaka'],
        allRounders: ['dhananjaya', 'hasaranga'],
        bowlers: ['madushanka', 'nuwan', 'maheesh'],
    },
    {
        id: 'bangladesh', name: 'Bangladesh', shortName: 'BAN', flag: '🇧🇩',
        rating: 78, primaryColor: '#006A4E', secondaryColor: '#F42A41',
        type: 'international',
        squad: [
            { id: 'litton', name: 'Litton Das', role: 'WK-Batsman', battingRating: 79, bowlingRating: 5, sr: 130, avg: 40, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'tanzid', name: 'Tanzid Hasan', role: 'Batsman', battingRating: 74, bowlingRating: 5, sr: 138, avg: 34, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'shakib', name: 'Shakib Al Hasan', role: 'All-rounder', battingRating: 83, bowlingRating: 86, sr: 128, avg: 38, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'mushfiqur', name: 'Mushfiqur Rahim', role: 'WK-Batsman', battingRating: 80, bowlingRating: 5, sr: 122, avg: 42, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'mahmudullah', name: 'Mahmudullah', role: 'All-rounder', battingRating: 75, bowlingRating: 68, sr: 125, avg: 34, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'towhid', name: 'Towhid Hridoy', role: 'Batsman', battingRating: 77, bowlingRating: 10, sr: 130, avg: 36, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'afif', name: 'Afif Hossain', role: 'All-rounder', battingRating: 72, bowlingRating: 65, sr: 128, avg: 30, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'mustafizur', name: 'Mustafizur Rahman', role: 'Bowler', battingRating: 15, bowlingRating: 85, sr: 65, avg: 5, battingStyle: 'Right-hand bat', bowlingStyle: 'Left-arm fast-medium' },
            { id: 'taskin', name: 'Taskin Ahmed', role: 'Bowler', battingRating: 18, bowlingRating: 82, sr: 68, avg: 6, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'shoriful', name: 'Shoriful Islam', role: 'Bowler', battingRating: 14, bowlingRating: 78, sr: 62, avg: 4, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm fast-medium' },
            { id: 'mehidy', name: 'Mehidy Hasan Miraz', role: 'All-rounder', battingRating: 65, bowlingRating: 80, sr: 115, avg: 24, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
        ],
        topOrder: ['litton', 'tanzid', 'shakib', 'mushfiqur', 'towhid'],
        allRounders: ['mahmudullah', 'mehidy'],
        bowlers: ['mustafizur', 'taskin', 'shoriful'],
    },
    {
        id: 'afghanistan', name: 'Afghanistan', shortName: 'AFG', flag: '🇦🇫',
        rating: 82, primaryColor: '#000000', secondaryColor: '#D32011',
        type: 'international',
        squad: [
            { id: 'rahmanullah', name: 'Rahmanullah Gurbaz', role: 'WK-Batsman', battingRating: 80, bowlingRating: 5, sr: 148, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'ibrahim', name: 'Ibrahim Zadran', role: 'Batsman', battingRating: 77, bowlingRating: 5, sr: 128, avg: 42, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'gulbadin', name: 'Gulbadin Naib', role: 'All-rounder', battingRating: 70, bowlingRating: 70, sr: 128, avg: 28, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'najibullah', name: 'Najibullah Zadran', role: 'Batsman', battingRating: 79, bowlingRating: 5, sr: 155, avg: 36, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'rashid_afg', name: 'Rashid Khan', role: 'All-rounder', battingRating: 68, bowlingRating: 94, sr: 140, avg: 25, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm leg-break' },
            { id: 'mujeeb', name: 'Mujeeb Ur Rahman', role: 'Bowler', battingRating: 10, bowlingRating: 88, sr: 60, avg: 4, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'noor', name: 'Noor Ahmad', role: 'Bowler', battingRating: 12, bowlingRating: 86, sr: 62, avg: 4, battingStyle: 'Right-hand bat', bowlingStyle: 'Left-arm wrist-spin' },
            { id: 'fazalhaq', name: 'Fazalhaq Farooqi', role: 'Bowler', battingRating: 15, bowlingRating: 85, sr: 65, avg: 5, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm fast' },
            { id: 'azmatullah', name: 'Azmatullah Omarzai', role: 'All-rounder', battingRating: 72, bowlingRating: 75, sr: 130, avg: 28, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'karim', name: 'Mohammad Nabi', role: 'All-rounder', battingRating: 68, bowlingRating: 78, sr: 130, avg: 26, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'sediqullah', name: 'Sediqullah Atal', role: 'Batsman', battingRating: 74, bowlingRating: 5, sr: 142, avg: 32, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
        ],
        topOrder: ['rahmanullah', 'ibrahim', 'najibullah', 'azmatullah', 'gulbadin'],
        allRounders: ['rashid_afg', 'karim'],
        bowlers: ['mujeeb', 'noor', 'fazalhaq'],
    },

    // ===== IPL TEAMS =====
    {
        id: 'mi', name: 'Mumbai Indians', shortName: 'MI', flag: '💙',
        rating: 110, primaryColor: '#004BA0', secondaryColor: '#D1AB3E',
        type: 'ipl',
        squad: [
            { id: 'rohit_mi', name: 'Rohit Sharma', role: 'Batsman', battingRating: 88, bowlingRating: 20, sr: 140, avg: 48, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'ishan', name: 'Ishan Kishan', role: 'WK-Batsman', battingRating: 82, bowlingRating: 5, sr: 148, avg: 38, battingStyle: 'Left-hand bat', bowlingStyle: 'None' },
            { id: 'tilak', name: 'Tilak Varma', role: 'Batsman', battingRating: 79, bowlingRating: 10, sr: 140, avg: 38, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'surya', name: 'Suryakumar Yadav', role: 'Batsman', battingRating: 90, bowlingRating: 5, sr: 165, avg: 44, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'pollard_mi', name: 'Tim David', role: 'Batsman', battingRating: 82, bowlingRating: 5, sr: 162, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'hardik_mi', name: 'Hardik Pandya', role: 'All-rounder', battingRating: 78, bowlingRating: 76, sr: 145, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'bumrah_mi', name: 'Jasprit Bumrah', role: 'Bowler', battingRating: 20, bowlingRating: 95, sr: 80, avg: 8, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
        ],
        topOrder: ['rohit_mi', 'ishan', 'surya', 'tilak', 'pollard_mi'],
        allRounders: ['hardik_mi'],
        bowlers: ['bumrah_mi'],
    },
    {
        id: 'csk', name: 'Chennai Super Kings', shortName: 'CSK', flag: '💛',
        rating: 108, primaryColor: '#F9CD05', secondaryColor: '#0081E9',
        type: 'ipl',
        squad: [
            { id: 'ruturaj', name: 'Ruturaj Gaikwad', role: 'Batsman', battingRating: 83, bowlingRating: 10, sr: 138, avg: 42, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'conway_csk', name: 'Devon Conway', role: 'WK-Batsman', battingRating: 84, bowlingRating: 5, sr: 130, avg: 48, battingStyle: 'Left-hand bat', bowlingStyle: 'None' },
            { id: 'dhoni', name: 'MS Dhoni', role: 'WK-Batsman', battingRating: 80, bowlingRating: 5, sr: 145, avg: 35, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'ajinkya', name: 'Ajinkya Rahane', role: 'Batsman', battingRating: 77, bowlingRating: 5, sr: 128, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'jadeja_csk', name: 'Ravindra Jadeja', role: 'All-rounder', battingRating: 72, bowlingRating: 85, sr: 128, avg: 35, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'deepak', name: 'Deepak Chahar', role: 'All-rounder', battingRating: 50, bowlingRating: 78, sr: 110, avg: 18, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'pathirana_csk', name: 'Matheesha Pathirana', role: 'Bowler', battingRating: 12, bowlingRating: 84, sr: 60, avg: 5, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
        ],
        topOrder: ['ruturaj', 'conway_csk', 'ajinkya', 'dhoni'],
        allRounders: ['jadeja_csk', 'deepak'],
        bowlers: ['pathirana_csk'],
    },
    {
        id: 'rcb', name: 'Royal Challengers Bengaluru', shortName: 'RCB', flag: '❤️',
        rating: 103, primaryColor: '#EC1C24', secondaryColor: '#000000',
        type: 'ipl',
        squad: [
            { id: 'virat_rcb', name: 'Virat Kohli', role: 'Batsman', battingRating: 92, bowlingRating: 15, sr: 137, avg: 58, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'faf', name: 'Faf du Plessis', role: 'Batsman', battingRating: 84, bowlingRating: 5, sr: 140, avg: 45, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'maxwell_rcb', name: 'Glenn Maxwell', role: 'All-rounder', battingRating: 85, bowlingRating: 72, sr: 160, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'dinesh', name: 'Dinesh Karthik', role: 'WK-Batsman', battingRating: 78, bowlingRating: 5, sr: 145, avg: 35, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'shahbaz', name: 'Shahbaz Ahmed', role: 'All-rounder', battingRating: 68, bowlingRating: 75, sr: 128, avg: 26, battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox' },
            { id: 'siraj_rcb', name: 'Mohammed Siraj', role: 'Bowler', battingRating: 15, bowlingRating: 82, sr: 70, avg: 6, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'hazlewood_rcb', name: 'Josh Hazlewood', role: 'Bowler', battingRating: 22, bowlingRating: 87, sr: 72, avg: 8, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
        ],
        topOrder: ['virat_rcb', 'faf', 'maxwell_rcb', 'dinesh'],
        allRounders: ['shahbaz'],
        bowlers: ['siraj_rcb', 'hazlewood_rcb'],
    },
    {
        id: 'kkr', name: 'Kolkata Knight Riders', shortName: 'KKR', flag: '💜',
        rating: 107, primaryColor: '#3A225D', secondaryColor: '#B3A123',
        type: 'ipl',
        squad: [
            { id: 'sunil_kkr', name: 'Sunil Narine', role: 'All-rounder', battingRating: 75, bowlingRating: 88, sr: 145, avg: 28, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'rahmanullah_kkr', name: 'Rahmanullah Gurbaz', role: 'WK-Batsman', battingRating: 80, bowlingRating: 5, sr: 148, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'None' },
            { id: 'venkatesh', name: 'Venkatesh Iyer', role: 'All-rounder', battingRating: 76, bowlingRating: 65, sr: 140, avg: 34, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'shreyas_kkr', name: 'Shreyas Iyer', role: 'Batsman', battingRating: 80, bowlingRating: 10, sr: 135, avg: 44, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm off-break' },
            { id: 'russell_kkr', name: 'Andre Russell', role: 'All-rounder', battingRating: 84, bowlingRating: 80, sr: 172, avg: 38, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast-medium' },
            { id: 'rinku', name: 'Rinku Singh', role: 'Batsman', battingRating: 79, bowlingRating: 5, sr: 148, avg: 36, battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm medium' },
            { id: 'harshit', name: 'Harshit Rana', role: 'Bowler', battingRating: 18, bowlingRating: 78, sr: 68, avg: 6, battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast' },
        ],
        topOrder: ['rahmanullah_kkr', 'sunil_kkr', 'venkatesh', 'shreyas_kkr'],
        allRounders: ['russell_kkr'],
        bowlers: ['harshit'],
    },
];

// Helper: get team by ID
window.getTeam = function(id) {
    return window.TEAMS_DATA.find(t => t.id === id);
};

// Helper: get starting XI from squad
window.getStartingXI = function(team) {
    const squad = team.squad;
    const xi = [];

    // 1. Always include exactly one wicket keeper first
    const wk = squad.find(p => p.role.toLowerCase().includes('wk'));
    if (wk) xi.push(wk);

    // 2. Top order (up to 5, skip WK if already added)
    const topOrder = team.topOrder.map(id => squad.find(p => p.id === id)).filter(Boolean);
    for (const p of topOrder) {
        if (xi.length >= 6) break;
        if (!xi.find(x => x.id === p.id)) xi.push(p);
    }

    // 3. All rounders (up to 2)
    const allRounders = team.allRounders.map(id => squad.find(p => p.id === id)).filter(Boolean);
    for (const p of allRounders) {
        if (xi.length >= 8) break;
        if (!xi.find(x => x.id === p.id)) xi.push(p);
    }

    // 4. Specialist bowlers (up to 4)
    const bowlers = team.bowlers.map(id => squad.find(p => p.id === id)).filter(Boolean);
    for (const p of bowlers) {
        if (xi.length >= 11) break;
        if (!xi.find(x => x.id === p.id)) xi.push(p);
    }

    // 5. Fill remaining from squad
    while (xi.length < 11) {
        const remaining = squad.find(p => !xi.find(x => x.id === p.id));
        if (remaining) xi.push(remaining);
        else break;
    }
    return xi.slice(0, 11);
};
