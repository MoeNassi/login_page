executable="push_swap"

# Reset
Color_Off='\033[0m'

# Regular Colors
Black='\033[0;30m' 
Red='\033[0;31m'   
Green='\033[0;32m' 
Yellow='\033[0;33m'
Blue='\033[0;34m'  
Purple='\033[0;35m'
Cyan='\033[0;36m'  
White='\033[0;37m' 

if [ -x "$executable" ] ; then
	while true; do
	input=$(jot -r 500 -10000000 10000000)
	output=$(./$executable $input | wc -l)
	if [ $output -lt 5500 ] ; then
		echo -e "${Green}success -> $output ${Color_Off}"
	else
		echo -e "${Red}Error in instructions the number is : ${Color_Off}" $output
	leaks_checker=$(leaks $executable)
	position=${!leaks_checker%%("leaks for")*}
	offset=${#position}
	echo $position
	if [[ $position ]] ; then
		number_of_leaks=$(echo "$string" | awk '{print substr($0, 7)}')
	# 	echo ""
	fi
	fi
	done
else
	echo -e "${Red}executable not found ${Color_Off}must be written as follow ${Green}$executable ${Color_Off}"
fi