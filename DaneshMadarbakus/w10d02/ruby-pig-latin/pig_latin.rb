class PigLatin
  def self.translate(word)
    if word[0] == "a" || word[0] == "e"
      word + "ay"
    elsif word[0] == "p" || word[0] == "k"
      word[1..-1] + word[0] + "ay"
    elsif word[0..2] == "squ" || word[0..2] == "thr" || word[0..2] == "sch"
      word[3..-1] + word[0..2] + "ay"
    elsif word[0..1] == "ch" || word[0..1] == "qu" || word[0..1] == "th"
      word[2..-1] + word[0..1] + "ay"
    # elsif word[0] == "i"
    #   word.split.map { |hi| hi[1..-1] + hi[0] + "ay"}
    end
  end
end
